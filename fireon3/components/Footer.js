// import from  '@downwindcss/text-decoration'

export default () => (
  <footer>
    <div className="flex justify-center items-center gap-5 py-3">
      <a href="#" target="_blank">
        {" "}
        <i className="fa-brands fa-instagram hover:opacity-70 cursor-pointer"></i>{" "}
      </a>
      <a href="#" target="_blank">
        {" "}
        <i className="fa-brands fa-instagram hover:opacity-70 cursor-pointer"></i>{" "}
      </a>
      <a href="#" target="_blank">
        {" "}
        <i className="fa-brands fa-github-alt hover:opacity-50 cursor-pointer"></i>{" "}
      </a>
    </div>

    <div className="flex justify-center items-center py-3">
      © 2022 - da|
      <a
        className="hover:opacity-50 "
        target="_blank"
        href="https://github.com/ydrea"
      >
        ydrea
      </a>
      |mnation
    </div>
  </footer>
);
