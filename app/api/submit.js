import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, number, state, district, pincode, emoji, videoUrl } = req.body;

    try {
      const user = await prisma.user.create({
        data: { name, number, state, district, pincode },
      });

      await prisma.feedback.create({
        data: {
          emoji,
          videoUrl,
          userId: user.id,
        },
      });

      res.status(200).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error submitting feedback.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
