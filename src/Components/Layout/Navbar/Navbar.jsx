import React, { useRef, useState } from "react";
import Button1 from "../../Button/Button";
import styles from "./navbar.module.scss";
import { AiOutlineDown, AiOutlineArrowLeft } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Aos } from "aos";
import "aos/dist/aos.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const Nextotal = useRef();
  const opensvg = useRef();
  const closesvg = useRef();
  const Solution = useRef();
  const Company = useRef();
  const Resources = useRef();
  const Openmenu = () => {
    // Nextotal.current.style.display="block"
    Nextotal.current.style.transform = "translateX(0)";
    opensvg.current.style.display = "none";
    closesvg.current.style.display = "block";
  };
  const Closemenu = () => {
    // Nextotal.current.style.display="none"

    Nextotal.current.style.transform = "translateX(1560px)";
    closesvg.current.style.display = "none";
    opensvg.current.style.display = "block";
  };

  const SolutionOpen = () => {
    Solution.current.style.transform = "translateY(-390px)";
  };
  const CloseSolution = () => {
    Solution.current.style.transform = "translateY(550px)";
  };

  const CompanyOpen = () => {
    Company.current.style.transform = "translateY(-870px)";
  };
  const CloseCompany = () => {
    Company.current.style.transform = "translateY(550px)";
  };

  const ResourcesOpen = () => {
    Resources.current.style.transform = "translateY(-1375px)";
  };
  const CloseResources = () => {
    Resources.current.style.transform = "translateY(550px)";
  };

 

  return (
    <nav>
      <div className={styles.bigsize_nav}>
        <div className="container">
          <div className={styles.nav_head}>
            <div className="row ">
              <div className="col-2">
                <div className={styles.img}>
                  <Link to={"/"}>
                    {" "}
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <ul>
                  <li className={styles.lii}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className={styles.solutionli}>
                    <div className={styles.solution}>
                      Solutions <AiOutlineDown />
                    </div>
                    <div className={styles.solution_text}>
                      <div className={styles.totall}>
                        <div className={styles.sol}>
                          <h1>Solutions</h1>
                          <div className={styles.total_ul}>
                            <ul>
                              <li>
                                Rent <span>Marketplace</span>
                              </li>
                              <li>
                                Rent <span>Social</span>
                              </li>
                              <li>
                                Rent <span>Engage</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                Rent <span>Search</span>
                              </li>
                              <li>
                                Rent <span>Target</span>
                              </li>
                              <li>
                                Rent <span>Rep</span>
                              </li>
                            </ul>
                          </div>
                          <Button1 text={"Explore all"} />
                        </div>

                        <div className={styles.sag}>
                          <div className={styles.total}>
                            <div className={styles.imgg}>
                              <img
                                src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg"
                                alt=""
                              />
                            </div>
                            <div className={styles.textt}>
                              <div className={styles.head}>
                                <Button1 text={"Featured"} />
                                <h5>09/14/2022</h5>
                              </div>
                              <div className={styles.body}>
                                <p>
                                  3 ways to get more from your property’s
                                  marketing budget
                                </p>
                                <h6>
                                  Explore <AiOutlineArrowLeft />{" "}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles.company}>
                    Company <AiOutlineDown />
                    <div className={styles.company_nextall}>
                      <div className={styles.company_next}>
                        <div className={styles.sag}>
                          <p>
                            <Link to={"/about"}>About</Link>
                          </p>
                          <p>
                            <Link to={"/news"}>News</Link>
                          </p>
                        </div>
                        <div className={styles.sol}>
                          <p>
                            <Link to={"/faq"}>Faq</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles.lii}>
                    <Link to={"/blog"}>Blog</Link>{" "}
                  </li>

                  <li className={styles.resourceli}>
                    <div className={styles.resource}>
                      Resources <AiOutlineDown />
                    </div>
                    <div className={styles.resource_text}>
                      <div className={styles.totall}>
                        <div className={styles.sol}>
                          <h1>Resources</h1>
                          <div className={styles.total_ul}>
                            <ul>
                              <li>
                                <span>Webinars</span>
                              </li>
                              <li>
                                <span>Checklists</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>Reports</span>
                              </li>
                              <li>
                                <span>Assessments</span>
                              </li>
                            </ul>
                          </div>
                          <Button1 text={"Explore all"} />
                        </div>

                        <div className={styles.sag}>
                          <div className={styles.total}>
                            <div className={styles.imgg}>
                              <img
                                src="https://solutions.rent.com/wp-content/uploads/2022/12/Great-Resigation-Webinar-Thumbnail-image.jpg"
                                alt=""
                              />
                            </div>
                            <div className={styles.textt}>
                              <div className={styles.head}>
                                <Button1 text={"Featured"} />
                                <h5>09/14/2022</h5>
                              </div>
                              <div className={styles.body}>
                                <p>
                                  How Property Teams Can Overcome Staff Turnover
                                </p>
                                <h6>
                                  Explore <AiOutlineArrowLeft />
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-3 ">
                <div className={styles.sag_nav}>
                  <p>Client login</p>

                  <Button className={styles.btn_nav} >
                    Get in touch
                  </Button>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobile_nav}>
        <div className={styles.mobile_head}>
          <div className={styles.sol}>
            <Link to={"/"}>
              <img
                src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
                alt=""
              />
            </Link>
          </div>

          <div className={styles.sag}>
            <div ref={opensvg} className={styles.svg1}>
              <VscThreeBars onClick={Openmenu} />
            </div>

            <div ref={closesvg} className={styles.svg2}>
              <AiOutlineClose onClick={Closemenu} />
            </div>
          </div>
        </div>

        <div className={styles.next_total} ref={Nextotal}>
          <div className="row align-items-center">
            <div className="col-6">
              <ul>
                <li onClick={SolutionOpen}>
                  Solutions <BsArrowRightCircle />
                </li>
                <li onClick={CompanyOpen}>
                  Company <BsArrowRightCircle />
                </li>
                <li onClick={Closemenu} ><Link to={'./blog'} >Blog</Link></li>
                <li onClick={ResourcesOpen}>
                  Resources <BsArrowRightCircle />
                </li>
              </ul>
              <div className={styles.buttons}>

                <Button className={styles.touch} >
                    Get in touch
                  </Button>

                
                <Button1 text={"Client login"} className={styles.client} />
              </div>

              <div className={styles.next_itemss}>
                <div className={styles.solutions_items} ref={Solution}>
                  <p onClick={CloseSolution}>Back</p>
                  <ul>
                    <li>
                      Rent<span>Marketplace</span>
                    </li>
                    <li>
                      Rent<span>Social</span>
                    </li>
                    <li>
                      Rent<span>Engage</span>
                    </li>

                    <li>
                      Rent<span>Search</span>
                    </li>
                    <li>
                      Rent<span>Target</span>
                    </li>
                    <li>
                      Rent<span>Rep</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.company_items} ref={Company}>
                  <p onClick={CloseCompany}>Back</p>
                  <ul>
                    <li onClick={Closemenu} >
                      <Link to={"/about"}> About</Link>
                    </li>
                    <li onClick={Closemenu} >
                      <Link to={"/news"}> News</Link>
                    </li>
                    <li onClick={Closemenu} >
                      <Link to={"/faq"}> Faq</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.resources_items} ref={Resources}>
                  <p onClick={CloseResources}>Back</p>
                  <ul>
                    <li>Webinars</li>
                    <li>Reports</li>
                    <li>Checklists</li>

                    <li>Assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.overlay}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
