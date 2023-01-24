import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
    <title>Todo List</title>
      <head />
      <body className="text-black  bg-purple-100 dark:text-white dark:bg-[#1c1c1c]">{children}</body>
    </html>
  )
}
