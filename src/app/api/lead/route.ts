import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body content here if needed
        if (!body.name || !body.email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // In a real application, you would send this data to a CRM or email service
        console.log('Lead capture submission:', body);

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Lead captured successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing lead capture:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
