import React, { useState } from 'react';
import { Button, Collapse, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
const Hook6 = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Button color="danger">Danger!</Button>
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="me-auto">
                    Logo
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Product
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
                <Button color="danger" onClick={toggle}>
                    Click Me
                </Button>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Thông tin khách hàng</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Nhập tên </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Nhập tên"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Nhập sdt </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Nhập sdt"
                                    type="email"
                                />
                            </FormGroup>


                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Mua ngay
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}

export default Hook6;
