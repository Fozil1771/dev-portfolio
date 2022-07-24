import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <div className="footer_link">
                    <div className="footer_link__item">
                        <h5>find me in:</h5>
                    </div>
                    <div className="footer_link__item">
                        <Link to=""><i className="ri-instagram-line ri-xl"></i></Link>
                    </div>
                    <div className="footer_link__item">
                        <Link to=""><i className="ri-linkedin-line ri-xl"></i></Link>
                    </div>

                </div>
                <div className="footer_link__item">
                    <Link to=""><i className="ri-github-fill ri-xl"></i></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer