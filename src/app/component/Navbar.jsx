import React from 'react';
import 'antd/dist/antd.css';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { PageHeader, Button } from 'antd';

const { SubMenu } = Menu;
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate("/login", { replace: true });
    }

    return (
        <>
            <PageHeader
                ghost={false}
                className="site-page-header"
                // onBack={() => null}
                title="React CRM"

                onBack={() => window.history.back()}
                extra={[
                    <Button key="1" type="primary" onClick={handleLoginButton}>
                        LOGIN
                    </Button>,
                ]}
            />

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>s
        </>
    )
}

export default Navbar;
