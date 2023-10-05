import React from 'react'
import './Header.css'

import { useNavigate } from 'react-router'


function Header() {

  const navigate = useNavigate();


    return (
        <>

            <section className='bg-header'>
                <header>
                    <div className="container">
                        <div className="row-1 align-items-center">
                            <div className="logo"  onClick={() => navigate('/')}>
                                <h4>ViewPage</h4>
                            </div>
 

                            <div className="bcm-sellor ms-4">
                                <span onClick={() => navigate('/view')}>All Product</span>
                            </div>
                        

                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Header