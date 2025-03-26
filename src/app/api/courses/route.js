import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('Course-Pilot');

    // Fetch courses (Optional: Limit results for better performance)
    const courses = await db
      .collection('coursecollection')
      .find({})
      .limit(50)
      .toArray();

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error('❌ API Fetch Error:', error.message);

    return NextResponse.json(
      { message: 'Error fetching courses', error: error.message },
      { status: 500 }
    );
  }
}
