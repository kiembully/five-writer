import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/Layout.module.scss'
import loginStyles from '../styles/UserEntry.module.scss'
import imgBanner from '../public/login.svg'
import { Form, Row, Col, Spinner, Modal, Button } from 'react-bootstrap';
import 'hover.css'
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { apiHelper } from '../helper/apiHelper';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useDropzone} from 'react-dropzone';
import imgUpload from '../public/upload_icon.svg'
import fileUpload from '../public/file_icon.svg'

const UserEntry = (props) => {
    const [validated, setValidated] = useState(false);
    const [forgotValidated, setForgotValidated] = useState(false);
    const [requestMessage, setRequestMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [security, setSecurity] = useState('');
    const [forgotMessage, setForgotMessage] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [terms, setTerms] = useState(Boolean);
    const [tel, setTel] = useState('');
    const [telError, setTelError] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const [forgotApiLoader, setForgotApiLoader] = useState(false);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({maxFiles:1});
    const files = acceptedFiles.map((file, i) => (
        <li className={loginStyles.fileDisplay} key={file.path}>
           <Image src={fileUpload} width={23} height={30} alt='uploaded file icon' /> 
           <span>{file.path} <button type="button" onClick={() => removeFile(i)}>x</button></span>
        </li>
    ));
    // Modal starts 
    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);
    // Modal ends 
    const removeFile = file => {
        const newFiles = [...files];     // make a var for the new array
        acceptedFiles.splice(file, 1);        // remove the file from the array
        setFileError(true)
    };
    const [fileError, setFileError] = useState(false);

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const newPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value);
    };
    const secrurityChangeHandler = (event) => {
        setSecurity(event.target.value);
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
    const telephoneChangeHandler = (event) => {
        setTel(event);
        setTelError(tel.trim().length > 9)
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
            // setTelError(false)
            // setFileError(false)
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
    function submitAccountHandler() {
        alert('Register Account on works')
    }
    function confirmEmailHandler() {
        setApiLoader(true);
        const formData = new FormData();

        formData.append("email", email);

        apiHelper("user/confirmemail", "POST", formData, null)
        .then((res) => {
            setApiLoader(false);
            const response = res.data;
            if (response.status) {
                localStorage.setItem('email_token', response.data.email_token)
                modalShow();
            } else {
                setRequestMessage(response.message)
            }
            setValidated(false)
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
    const submitNewPasswordHandler = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const formData = new FormData();

        formData.append("email_token", localStorage.getItem('email_token'));
        formData.append("security_code", security);
        formData.append("new_password", newPassword);

        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            setForgotApiLoader(true);
            apiHelper("user/resetpassword", "PUT", formData, null)
            .then((res) => {
                setForgotApiLoader(false);
                const response = res.data;
                if (response.status) {
                    modalClose();
                    localStorage.removeItem('email_token');
                    router.push('/login');
                } else {
                    setForgotMessage(response.message);
                }
                setForgotValidated(false)
            })
            .catch((error) => console.error(`Error: ${error}`));
        }

        setForgotValidated(true);

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
            (router.pathname == '/register') ? submitAccountHandler() : confirmEmailHandler()
        }
      }
  
      setValidated(true);
      setTelError(tel.trim().length > 10)
      setFileError(files.length<1)
    };
    
    return (
        <div className={utilStyles.containerOuter}>
        
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
                            minLength={8}
                            required
                            disabled={apiLoader}
                            />
                            <Form.Control.Feedback className={loginStyles.errors} type="invalid">Invalid Password!</Form.Control.Feedback>
                        </Form.Group>
                        :''}
                        {router.pathname=='/register'?
                        <>
                        <Form.Group className="mb-3" controlId="formBasicTelephone">
                            <Form.Label className={loginStyles.frmLabel}>Mobile Number</Form.Label>
                            <PhoneInput
                            inputClass={loginStyles.telInput}
                            placeholder="+x (xxx) xxx-xxxx"
                            country={'us'}
                            value={tel}
                            onChange={telephoneChangeHandler}
                            isValid={telError}
                            required
                            disabled={apiLoader}
                            />
                            <Form.Control.Feedback className={loginStyles.errors} type="invalid" style={telError?{display:'none'}:{display:'block'}}>Invalid mobile number!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTelephone">
                            <Form.Label className={loginStyles.frmLabel}>Upload your CV</Form.Label>
                            <section className={loginStyles.secUpload}>
                            <div className={loginStyles.dropzone} {...getRootProps()} style={files.length>0?{border: '3px dashed #2CBEFF'}:{border: '3px dashed #96AABE'}}>
                                <input 
                                required 
                                disabled={apiLoader || files.length > 0} 
                                {...getInputProps()} 
                                />
                                {files.length>0?
                                files
                                :
                                <>
                                <Image src={imgUpload} width={35} height={30} alt='upload icon' />
                                <p>Drag and drop here, or <span>browse</span></p>
                                </>
                                }
                            </div>
                            </section>
                            {files.length < 1 ?
                            <Form.Control.Feedback className={loginStyles.errors} style={fileError?{display:'block'}:{display:'none'}} type="invalid" >CV required!</Form.Control.Feedback>
                            :''}
                        </Form.Group>
                        </>
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
                                    required={router.pathname=='/register'}
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

        {/* modal  */}
        <Modal show={show} onHide={modalClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm new Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={forgotValidated} onSubmit={submitNewPasswordHandler}>
                    <Form.Group className="mb-3" controlId="formForgotPassword">
                        <Form.Label className={loginStyles.forgotLabel}>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="New Password" 
                        value={newPassword}
                        onChange={newPasswordChangeHandler}
                        minLength={8}
                        required
                        disabled={forgotApiLoader}
                        />
                        <Form.Control.Feedback className={loginStyles.errors} type="invalid">Invalid Password!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSecurityCode">
                        <Form.Label className={loginStyles.forgotLabel}>Security Code</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Security Code" 
                        value={security}
                        onChange={secrurityChangeHandler}
                        minLength={6}
                        required
                        disabled={forgotApiLoader}
                        />
                        <Form.Control.Feedback className={loginStyles.errors} type="invalid">Invalid Security Code!</Form.Control.Feedback>
                    </Form.Group>
                    
                    <div className={loginStyles.btnSubmitWrap}>
                        {!!forgotMessage ? <div>{forgotMessage}</div> : ''}
                        <button className={`${loginStyles.btnSubmit} hvr-grow`} type="submit" disabled={forgotApiLoader}>
                            {forgotApiLoader?<Spinner animation="border" variant="light" size="sm" />:props.btnText}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
        
        </div>
    );
}

export default UserEntry;