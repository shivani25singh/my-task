import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/profile.module.css'
import styles2 from '../../styles/feedback1.module.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// form
import Form from 'react-bootstrap/Form';
// buttons
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


export default function Chat() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        
            <div className={styles2.answers}>
                <Container>
                    <Row>
                        <Col md={9} sm={12} xs={12}>
                            <div className={styles2.answers_left}>
                                <div className={styles2.up}>
                                    <p>Baleno 2015-2022</p>
                                    <p>safety</p>
                                </div>
                                <div className={styles.tab_box}>
                                    <h4>How safe is Baleno Zeta on highways?</h4>
                                    <p className={styles.follow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                                            2.1K Views 
                                            <span>   </span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                             Add Answer
                                    </p>
                                </div>
                                <div className={styles2.answers_box}>
                                    <p>7 Answers</p>
                               
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/S.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Shivani</span> | 3years ago</h5>
                                                <div class={styles.trapezoid}></div>
                                               
                                                <div className={styles.ans_details1}>
                                                    
                                                    <h6>All the variants of baleno comes with standard safety equipments like front dual aisbags abs etc.If you serach on internet  there are some videos showing alot of  damage
                                                    on baleno in minor accidents, this is beacause every manufactureer have different approaches to provide safety, in maruti case they gave  alot of crumbles zone  gets damaged   
                                                    tp absorbs any hits. If you open hood and see engine ba there is alot of space btw radiator and engine in petrol its huge. This crumbles zone gets damaged in small acccidents
                                                    also but cost of repair in not repair. My bimper got hit once preety bad.</h6>
                                                    
                                                    
                                                </div>
                                                
                                                <div className={styles.reply}>
                                                    <p><Button onClick={() => setCount(count + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>  {count}<span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                                <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
        <Form.Control as="textarea" rows={3} placeholder="Add your reply" />
      </Form.Group>
    <div className={styles.vns}>
      <Button className={styles.vns1} variant="outline">Submit</Button>
      <Button className={styles.vns2} variant="outline">Cancel</Button>
      </div>
    </Form>
                                            </div>
                                        </Col>
                                    </Row>
                                    </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/S.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>SHIVANI </span> | 1 month ago</h5>
                                                <h6>very safely , even at high speed car maintained its stability ABS works well</h6>
                                                <div className={styles.reply}>
                                                    <p><Button onClick={() => setCount(count + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>{count}<span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                                <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
        <Form.Control as="textarea" rows={3} placeholder="Add your reply" />
      </Form.Group>
    <div className={styles.vns}>
      <Button className={styles.vns1} variant="outline">Cancel</Button>
      <Button className={styles.vns2} variant="outline">Submit</Button>
      </div>
    </Form>
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/S.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box1}>
                                                <h5><span>priya </span> | 3 years ago</h5>
                                                <h6>its preety safe, 2 air bags are not enough th0ught but ABS is intutive and drivinh  dynamics (ride and handling are 
                                                    very stable . But still drive slow n safely) </h6>
                                                <div className={styles.reply}>
                                                    <p><Button onClick={() => setCount(count+ 1)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>{count} <span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                                <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
        <Form.Control as="textarea" rows={3} placeholder="Add your reply" />
      </Form.Group>
    <div className={styles.vns}>
      <Button className={styles.vns1} variant="outline">Cancel</Button>
      <Button className={styles.vns2} variant="outline">Submit</Button>
      </div>
    </Form>
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className={styles.rs}><span>VIEW 5  MORE ANSWERS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></span></p>
<p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg>
                                               Add Answers</p>

                                            <Form.Control className={styles.form_box} type="text" placeholder="Have something to say....." />
                                            <button className={styles.Button}>Add Answer</button>
                                            <h3 className={styles.h}>From The Community</h3>
                                            <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Q. what is a diffrent between 2018 petrol Baleno.... &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Q. Is there any change in maruti baleno 2019 in inter... &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Q. Are there going to be any changes to the steering... &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
                                            
                            
                                </div>

                            </div>  
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            <div className={styles2.answers_right}>
                                <div className={styles2.trending}>
                                    <h3> BEST MARUTI SUZUKI CARS</h3>
                                    <h3><a href="#">View All</a></h3>
                                </div>
                                <div className={styles2.trending_box}>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/wagon.webp" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti Wagon</h4>
                                                    <p>Rs.5.47 Lakh - 7.20 Lakh*</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/xl5.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti XL5</h4>
                                                    <p>Rs. 5.0lakh- 6.0Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/breeza.webp" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>MAruti vitara breeza</h4>
                                                    <p>Rs.7.84lakhs-11.50lakhs</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/dzire.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti dzire</h4>
                                                    <p>Rs. 6.24lakhs-9.18Lakhs</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/jimny.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti Jimny 5-Door</h4>
                                                    <p>Rs.10lakhs- 11lakhs</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                  
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/ertiga.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti Ertiga</h4>
                                                    <p>Rs. 8.85Lakhs- 12lakhs</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/xl6.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Maruti Xl6</h4>
                                                    <p>Rs. 11Lakh-14.99lakhs</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


    )
}