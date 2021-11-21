import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/Layout.module.scss'
import loginStyles from '../styles/UserEntry.module.scss'
import imgBanner from '../public/login.svg'
import { Form, Row, Col } from 'react-bootstrap';
import 'hover.css'

const Login = ({data}) => {
    return (
        <div className={utilStyles.containerOuter}>
        <Head>
            <title>Login</title>
            <meta name='keywords' content='login'></meta>
            <meta name='description' content='login form'></meta>
        </Head>
        
        <div className={utilStyles.containerWrap}>
            <div className={`${utilStyles.containerInner} ${utilStyles.containerReverse}`}>
                <span>

                    <div className={loginStyles.loginFormOuter}>
                        <h1>It's good to have you back</h1>
                        <p>Welcome back! Please login to your account.</p>

                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={loginStyles.frmLabel}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={loginStyles.frmLabel}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className={`${loginStyles.marginBottom60} "mb-3"`} controlId="formBasicCheckbox">
                            <Row className={loginStyles.rowWrap}>
                                <Col sm>
                                    <Form.Check className={loginStyles.rememberLabel} type="checkbox" label="Remember me" />
                                </Col>
                                <Col sm className={loginStyles.forgotLinkWrap}>
                                    <Form.Text className="text-muted">
                                        <Link href='/forgot'><a className={loginStyles.forgotLink}>Forgot Password?</a></Link>
                                    </Form.Text>
                                </Col>
                            </Row>
                        </Form.Group>
                        <button className={`${loginStyles.btnSubmit} hvr-grow`} type="submit">
                            Login
                        </button>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Text className="text-muted" className={loginStyles.spnLabelWrap}>
                                    <span className={loginStyles.spnLabel}>Not Registered yet? </span>
                                    <Link href='/register'><a className={loginStyles.createAccountLink}>Create an account</a></Link>
                                </Form.Text>
                        </Form.Group>
                        </Form>
                    </div>
                    
                </span>
                <span>
                    <div className={utilStyles.imgWrap}>
                    <Image src={imgBanner} width={600} height={500} alt='woman writing' layout="responsive" priority />
                    </div>
                </span>
            </div>
        </div>

        </div>
    );
}

export default Login;