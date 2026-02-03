import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-2 border border-primary">LOGO</div>
            <div className="col border border-primary">
              <Link href="/">Home</Link> &nbsp;
              <Link href="/students">Students</Link> &nbsp;
              <Link href="/colleges">Colleges</Link> &nbsp;
              <Link href="/mobiles">Mobiles</Link> &nbsp;
              <Link href="/faculties">Faculties</Link> &nbsp;
              <Link href="/facultiesnew">Faculties New</Link> &nbsp;
              <Link href="/login">Login</Link> &nbsp;
            </div>
          </div>
          <div className="row">
            <div className="col-3 border border-primary">SIDEBAR</div>
            <div className="col border border-primary">{children}</div>
          </div>
          <div className="row">
            <div className="col border border-primary">FOOTER</div>
          </div>
        </div>
      </body>
    </html>
  );
}
