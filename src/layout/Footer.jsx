function Footer() {
    return <footer className="page-footer #1565c0 blue darken-3">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      {/* получение текущего года */}
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
}

export {Footer}