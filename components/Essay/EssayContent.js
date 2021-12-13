// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

// plugs 
import Link from 'next/link';
import { useState } from 'react';
import CollegeUpload from './CollegeUpload';
import BachelorUpload from './BachelorUpload';
import MasterUpload from './MasterUpload';

const EssayContent = (props) => {

    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>

                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_1">
                <Form.Label className={panelStyles.lblWriter}>
                    COLLEGE LEVEL ESSAY: 1-2 Pages MLA <br />
                    <span className={panelStyles.spnSubLabel}>Read the article “In search of the True Self,” and write a two-page summary that answers the following questions. What question is the author trying to answer? How does the author answer the question? How does the author defend the question? A reflection on the author&apos;s argument? Do you find it good? Additional instructions: Writing Style: MLA No of pages: 1-2 pages No of sources: 1Link: <br />
                        <Link href='http://opinionator.blogs.nytimes.com/2011/06/05/in-search-of-the-true-self/'><a>http://opinionator.blogs.nytimes.com/2011/06/05/in-search-of-the-true-self/</a></Link>
                    </span>
                </Form.Label>

                <CollegeUpload />
                
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_2">
                <Form.Label className={panelStyles.lblWriter}>
                    BACHELOR LEVEL ESSAY <br />
                    <span className={panelStyles.spnSubLabel}>Why are female superheroes not common in movies/comic books? Additional instructions:• Writing Style: APA• Number of pages: 1- 2 pages• Number of sources: 3</span>
                </Form.Label>

                <BachelorUpload />
                
                </Form.Group>
                </Row>
                <Row className="mb-5">
                <Form.Group className="mb-2" controlId="question_3">
                <Form.Label className={panelStyles.lblWriter}>
                    MASTERS LEVEL ESSAY <br />
                    <span className={panelStyles.spnSubLabel}>Write a research paper on “The effects of caffeine on the heart rate variability.” Use scholarly journals as your source of reference.• Writing Style: Harvard• No of pages: 1-2 Pages• No of sources: 3• Abstract: Yes</span>
                </Form.Label>

                <MasterUpload />
                
                </Form.Group>
                </Row>
                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button className={panelStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button onClick={props.buttonSubmit}>Submit</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default EssayContent;