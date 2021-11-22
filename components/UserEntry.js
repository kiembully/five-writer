import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/Layout.module.scss'
import loginStyles from '../styles/UserEntry.module.scss'
import imgBanner from '../public/login.svg'
import { Form, Row, Col, Spinner } from 'react-bootstrap';
import 'hover.css'
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { apiHelper } from '../helper/apiHelper';
import { route } from 'next/dist/server/router';

const UserEntry = (props) => {
    const [validated, setValidated] = useState(false);
    const [requestMessage, setRequestMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [terms, setTerms] = useState(Boolean);
    const [apiLoader, setApiLoader] = useState(false);

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const termsChangeHandler = (event) => {
        setTerms(event.target.value)
    }
    const firstnameChangeHandler = (event) => {
        setFirstName(event.target.value)
    }
    const lastnameChangeHandler = (event) => {
        setLastName(event.target.value)
    }
    function submitLoginHandler() {
        setApiLoader(true);
        const formData = new FormData();

        formData.append("email", email);
        formData.append("password", password);

        apiHelper("user/login", "POST", formData, null)
        .then((res) => {
            setApiLoader(false);
            const response = res.data;
            if (response.status) {
                localStorage.setItem('user_token', response.data.user_token);
                router.push('/orders')
            } else {
                setRequestMessage(response.message)
            }
            setValidated(false)
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
    function submitAccountHandler() {
        alert('Register Account on works')
    }
    function submitNewPasswordHandler() {
        alert('Forgot Password on works')
    }

    const router = useRouter();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        if (router.pathname == '/login') {
            submitLoginHandler()
        } else {
            (router.pathname == '/register') ? submitAccountHandler() : submitNewPasswordHandler()
        }
      }
  
      setValidated(true);
    };
    
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
                        <h1>{props.title}</h1>
                        <p>{props.pitch}</p>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {router.pathname == '/register' ? 
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label className={loginStyles.frmLabel}>First Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="First Name" 
                            value={firstname}
                            onChange={firstnameChangeHandler}
                            required
                            disabled={apiLoader}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label className={loginStyles.frmLabel}>Last Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Last Name" 
                            value={lastname}
                            onChange={lastnameChangeHandler}
                            required
                            disabled={apiLoader}
                            />
                            </Form.Group>
                        </Row>
                        : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={loginStyles.frmLabel}>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Your email address" 
                            value={email}
                            onChange={emailChangeHandler}
                            required
                            disabled={apiLoader}
                            />
                            <Form.Control.Feedback className={loginStyles.errors} type="invalid">Invalid Email!</Form.Control.Feedback>
                        </Form.Group>
                        {router.pathname != '/forgot'?
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={loginStyles.frmLabel}>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={passwordChangeHandler}
                            required
                            disabled={apiLoader}
                            />
                            <Form.Control.Feedback className={loginStyles.errors} type="invalid">Invalid Password!</Form.Control.Feedback>
                        </Form.Group>
                        :''}
                        {!!props.checkBox ?
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                            <Row className={loginStyles.rowWrap}>
                                <Col sm>
                                    <Form.Check 
                                    className={loginStyles.rememberLabel} 
                                    type="checkbox" 
                                    label={props.checkBox}
                                    value={terms}
                                    onChange={termsChangeHandler}
                                    disabled={apiLoader}
                                    />
                                    {router.pathname=='/register' ?
                                    <Form.Text className="text-muted">
                                        <Link href='/terms'><a className={loginStyles.forgotLink}>Terms and Conditions</a></Link>
                                    </Form.Text> 
                                    : ''}
                                </Col>
                                {router.pathname!='/register'?
                                <Col sm className={loginStyles.forgotLinkWrap}>
                                    <Form.Text className="text-muted">
                                        <Link href='/forgot'><a>Forgot Password?</a></Link>
                                    </Form.Text>
                                </Col>
                                :''}
                            </Row>
                        </Form.Group>
                        : ''
                        }
                        <div className={loginStyles.btnSubmitWrap}>
                            {!!requestMessage ? <div>{requestMessage}</div> : ''}
                            <button className={`${loginStyles.btnSubmit} hvr-grow`} type="submit" disabled={apiLoader}>
                                {apiLoader?<Spinner animation="border" variant="light" size="sm" />:props.btnText}
                            </button>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicOptions">
                            <Form.Text className={`${loginStyles.spnLabelWrap} text-muted`}>
                                    <span className={loginStyles.spnLabel}>{props.optionText} </span>
                                    <Link href={props.optionDestination}><a className={loginStyles.createAccountLink}>{props.optionAction}</a></Link>
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

export default UserEntry;