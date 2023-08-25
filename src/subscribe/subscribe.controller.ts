import { Controller, Post, Body } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('subscribe')
export class SubscribeController {
  @Post()
  async subscribe(@Body('email') email: string) {
    try {
      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'kiraalex525@gmail.com', // Replace with your Gmail email address
          pass: 'Dger*1234', // Replace with your Gmail password
        },
      });

      // Define the email options
      const mailOptions = {
        from: 'kiraalex525@gmail.com', // Replace with your Gmail email address
        to: 'davegerim@gmail.com', // Replace with the admin's inbox email address
        subject: 'New Subscription',
        text: `A user has subscribed with the email: ${email}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return { message: 'Subscription successful' };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send subscription email');
    }
  }
}
