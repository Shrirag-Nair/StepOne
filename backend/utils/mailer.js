import nodemailer from "nodemailer";

export const sendOrderEmail = async (to, order) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,   // your Gmail address
      pass: process.env.EMAIL_PASS,   // app password (not your Gmail password)
    },
  });

  const mailOptions = {
    from: `"StepOne Shoes" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Your Order Confirmation - ${order._id}`,
    html: `
      <h2>Thank you for your order!</h2>
      <p>Order ID: <strong>${order._id}</strong></p>
      <p>Total: ₹${order.totalAmount}</p>
      <h3>Items:</h3>
      <ul>
        ${order.products.map(p => `<li>${p.quantity} x ${p.product} @ ₹${p.price}</li>`).join("")}
      </ul>
      <p>You’ll receive another email when your order ships.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
