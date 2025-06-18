import { NextResponse } from "next/server";
import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";

export async function GET() {
  const client = new EC2Client({
    region: 'ca-central-1',
    credentials: {
      accessKeyId: process.env.AWS_EC2_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_EC2_SECRET_ACCESS_KEY,
    },
  });

  try {
    const command = new DescribeInstancesCommand({
      InstanceIds: [process.env.EC2_INSTANCE_ID], // Add this to your .env
    });

    const response = await client.send(command);

    const instance = response.Reservations?.[0]?.Instances?.[0];

    const status = instance?.State?.Name || "unknown";

    return NextResponse.json({ status });
  } catch (error) {
    console.error("Error fetching instance status:", error);
    return NextResponse.json({ error: "Failed to get instance status" }, { status: 500 });
  }
}
