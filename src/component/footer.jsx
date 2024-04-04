export default function Footer(){
    return(
        <div
  className="container-fluid d-flex bg-warning w-100"
  style={{ marginLeft: 0, marginRight: 0, paddingTop: 175 }}
>
  <div className="container-fluid d-flex flex-column align-items-center">
    <p style={{ fontSize: 50 }}>Eat, Cook, Repeat</p>
    <p>Share your recipe by uploading here !</p>
    <ul className="nav mt-5">
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Product
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Company
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Learn More
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Get in Touch
        </a>
      </li>
    </ul>
    <p style={{ alignSelf: "flex-end" }}>PijarCamp</p>
  </div>
</div>

    )
}