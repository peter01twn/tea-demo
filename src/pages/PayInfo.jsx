import React from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// import{ BrowserRouter as Link} from "react-router-dom";
// import '../styles/jc/checkout.scss'
import '../styles/jc/payinfo.scss'

function payinfo() {
  return (
    <div className="container">
      <Row>
        <Col sm={4}>
          <div class="timeline-small">
            <div class="timeline-small-body">
              <ul>
                <li>
                  <div class="bullet pink"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>結帳</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet orange"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>付款資訊</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet blue"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>完成訂單</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                {/* <li>
                  <div class="bullet green"></div>
                  <div class="date">XXXX年XX月XX日</div>
                  <div class="desc">
                    <h3>内容段落1</h3>
                    <h4>内容段落2内容段落2内容段落2内容段落2</h4>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <Timeline>
            <Timeline.Item>結帳</Timeline.Item>
            <Timeline.Item>付款資訊</Timeline.Item>
            <Timeline.Item>確認訂單</Timeline.Item>
            <Timeline.Item>完成訂單</Timeline.Item>
          </Timeline> */}
        </Col>
        <Col sm={8}>
          <h1 className="h123">付款資訊</h1>
          <Form>
            <h4>訂購人資料</h4>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                姓名
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="name" placeholder="請輸入姓名" />
              </Col>
              <Form.Check
                type="radio"
                label="先生"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="女士"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                身分證
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="password" placeholder="請輸入身分證字號" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPhone">
              <Form.Label column sm={2}>
                手機
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="phone" placeholder="請輸入手機" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTel">
              <Form.Label column sm={2}>
                市話
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="tel" placeholder="請輸入市話" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                信箱
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="請輸入信箱" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label=" 記住我 " />
              </Col>
            </Form.Group>
            <h4>收件人資料</h4>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                姓名
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="name" placeholder="請輸入姓名" />
              </Col>
              <Form.Check
                type="radio"
                label="先生"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="女士"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.SelectCustom">
              <Form.Label>收件地址</Form.Label>
              <br />

              <Form>
                <Form.Group as="Row" controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Label></Form.Label>
                  <Form.Control as="select" size="sm" custom>
                    <option>台北市</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                  <Form.Control as="select" size="sm" custom>
                    <option>大安區</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as="Row" controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Label></Form.Label>
                  <Form.Control as="select" size="sm" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Form.Group>
            <h4>信用卡付款</h4>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                卡號
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                有限期限
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="**" />
              </Col>
              <p>月</p>
              <Col sm={2}>
                <Form.Control type="email" placeholder="**" />
              </Col>
              <p>年</p>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                後三碼
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="***" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit"> 確認送出 </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default payinfo