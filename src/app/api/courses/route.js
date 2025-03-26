import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;

    // Check if client is connected
    if (!client) {
      throw new Error('MongoDB client not connected');
    }

    const db = client.db('Course-Pilot');

    // Fetch courses (Optional: Limit results for better performance)
    const courses = await db
      .collection('coursecollection')
      .find({})
      .limit(50)
      .toArray();

    // If no courses are found, return an empty array
    if (courses.length === 0) {
      return NextResponse.json(
        { message: 'No courses found', courses: [] },
        { status: 200 }
      );
    }

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error('❌ API Fetch Error:', error); // Log full error for debugging

    // Return a user-friendly error message
    return NextResponse.json(
      {
        message: 'Error fetching courses',
        error:
          process.env.NODE_ENV === 'development'
            ? error.message
            : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
