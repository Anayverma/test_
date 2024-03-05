import { NextResponse } from "next/server";

export function GET(request, content) {
  const data = [
    "hehe1: bye",
    "hehe2: bye",
    "hehe3: bye",
    "hehe4: bye",
    "hehe5: bye",
  ];

  const userdata = data.filter((_, index) => index + 1 == content.params.api);
  for (let i = 0; i < data.length; i++) console.log(data[i]);
  return NextResponse.json(userdata, { status: 200 });
}

export async function POST(request, content) {
  const data = await request.json();
  // const { hi } = data;

  console.log(data);
  return NextResponse.json(data, { status: 202 });
}
