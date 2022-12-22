import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedinIn, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons';

const currentYear = new Date().getFullYear();


function Footer(props) {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

            {/* Footer*/}
            <footer className="page-footer back-g text-white-50 p-5">

                {/* Footer Elements */}
                <div className="container">

                    {/* Social buttons */}
                    <ul className="social-icons list-unstyled list-inline text-center">
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item">
                            <a className="btn-floating btn-email mx-1" href="mailto:gamedeviitk@gmail.com" target="_blank">
                                <i className="fa fa-envelope">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </i>

                            </a>
                        </li>
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/gamedev.iitk" target="_blank">
                                <i className="fab fa-facebook">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </i>

                            </a>
                        </li>
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item">
                            <a className="btn-floating btn-ins mx-1" href="https://www.instagram.com/gamedev_iitk/" target="_blank">
                                <i className="fab fa-instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </i>

                            </a>
                        </li>
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item">
                            <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/company/studio-centauri/" target="_blank">
                                <i className="fab fa-linkedin-in">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </i>

                            </a>
                        </li>
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item" style={{ transform: 'translateY(2px)' }}>
                            <a className="btn-floating btn-discord mx-1" href="https://discord.gg/pThvGHs" target="_blank">
                                <i className="fab fa-discord">
                                    <FontAwesomeIcon icon={faDiscord} />
                                </i>

                            </a>
                        </li>
                        <li 
                        onMouseEnter={() => props.setH(true)}
                        onMouseLeave={() => props.setH(false)} 
                        className="list-inline-item" style={{ transform: 'translateY(2px)' }}>
                            <a className="btn-floating btn-twitch mx-1" href="https://www.twitch.tv/studiocentauri" target="_blank">
                                <i className="fab fa-twitch">
                                    <FontAwesomeIcon icon={faTwitch} />
                                </i>
                            </a>
                        </li>
                    </ul>
                    {/*  Social buttons  */}

                </div>
                {/*  Footer Elements  */}

                {/*  Copyright  */}
                <div 
                onMouseEnter={() => props.setH(true)}
                onMouseLeave={() => props.setH(false)} 
                className="footer-copyright text-center py-3">
                    © {currentYear} Game Development Club, IIT Kanpur
                    {/*  Theme derived from Airspace, by <a href="http://www.themefisher.com">Themefisher</a>.  */}
                </div>
                {/*  Copyright  */}

            </footer>
            {/* Footer */}

        </div>
    )
}

export default Footer