import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body content here if needed
        if (!body.name || !body.email || !body.service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // In a real application, you would send this data to a database or email service
        console.log('Consultation request:', body);

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Consultation request received successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing consultation request:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
