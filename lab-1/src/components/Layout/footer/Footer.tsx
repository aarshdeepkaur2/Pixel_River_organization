import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
      <footer className="mt-8 py-4 border-t text-center text-gray-600">
      Pixell River Financial © {year}
    </footer>
  );
}

export default Footer;
