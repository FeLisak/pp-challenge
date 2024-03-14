export const metadata = {
  title: "Pedido Pago Challange",
  description:
    "The objective of the challenge is to evaluate my skills for the front-end position.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
