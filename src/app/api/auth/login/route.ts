import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      return NextResponse.json({ success: true, user });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 401 });
    }
  } catch (err: any) {
    console.error('❌ API Error:', err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
