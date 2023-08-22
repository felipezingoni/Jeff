import React, { useState } from 'react';
import '../assets/network.scss';
import soundFile from '../assets/audio1.mp3';

const Network = () => {
  const [clickedCmd, setClickedCmd] = useState(null);

  const handleCmdClick = (cmdIndex) => {
    const audio = new Audio(soundFile);
    audio.play();
    setClickedCmd(cmdIndex);
  };

  return (
    <div className='tile'>
      <div className='cmd-dock d-flex flex-column' style={{ height: '334px' }}>
        <div className='cmd-info'>
          {clickedCmd === 1 && (
            <div className='d-flex flex-column'>
              <div className='title'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" width="20px" height='20px' alt="" />
                <h5 className='title-2'>NOTION</h5>
              </div>
              <div className='tetx'>
                <button href="" className='notion'>
                  <p className='notion-title'>💻 Meetings</p>
                  <hr />
                  <p className='notion-subtitle'>Jeff's Workspace</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'>📍 Projects</p>
                  <hr />
                  <p className='notion-subtitle'>Jeff's Workspace</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'>📄 Task</p>
                  <hr />
                  <p className='notion-subtitle'>Jeff's Workspace</p>
                </button>
              </div>
            </div>
          )}
          {clickedCmd === 2 && (
            <div className='d-flex flex-column'>
              <div className='title'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691685268/Jeff%20Studio/figma_zczlet.webp" style={{ borderRadius: '5px'}} width="20px" height='20px' alt="" />
                <h5 className='title-2'>FIGMA</h5>
              </div>
              <div className='tetx'>
                  <button href="" className='notion'>
                  <p className='notion-title'><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ddc37348e948d581cf99e2_figma-file-icon.svg"  height='24px' alt="" /> Design file</p>
                    <hr />
                    <p className='notion-subtitle'>figma.com/Design-file</p>
                  </button>
                  <button href="" className='notion'>
                  <p className='notion-title'><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ddc373e724d763ec5c31c5_figjam-file-icon.svg" height='24px' alt="" /> FigJam Board</p>
                    <hr />
                  <p className='notion-subtitle'>figma.com/FigJam-Board</p>
                  </button>
                  <button href="" className='notion'>
                  <p className='notion-title'><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ddc37348e948d581cf99e2_figma-file-icon.svg" height='24px' alt="" /> Beton Project</p>
                    <hr />
                  <p className='notion-subtitle'>figma.com/Beton-project</p>
                  </button>
              </div>
            </div>
          )}
          {clickedCmd === 3 && (
            <div className='d-flex flex-column'>
              <div className='title'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691698152/Jeff%20Studio/reactjs_ach0jy.png" style={{ borderRadius: '5px' }} width="20px" height='20px' alt="" />
                <h5 className='title-2'>REACT</h5>
              </div>
              <div className='tetx'>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691698152/Jeff%20Studio/reactjs_ach0jy.png" height='20px' width='20px' alt="" /> App.jsx</p>
                  <hr />
                  <p className='notion-subtitle'>src/App.jsx</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://sass-lang.com/assets/img/logos/logo.svg" height='24px' width='24px' alt="" /> App.scss</p>
                  <hr />
                  <p className='notion-subtitle'>src/App.scss</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://rxdb.info/files/icons/nodejs.svg" height='24px' width='24px' alt="" /> package.json</p>
                  <hr />
                  <p className='notion-subtitle'>package.json</p>
                </button>
              </div>
            </div>
            )}
          {clickedCmd === 4 && (
            <div className='d-flex flex-column'>
              <div className='title'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691698789/Jeff%20Studio/62c48bd4d884e8c372162224_v3jbhi.png" style={{ borderRadius: '5px' }} width="20px" height='20px' alt="" />
                <h5 className='title-2'>RUBY</h5>
              </div>
              <div className='tetx'>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/396px-Ruby_logo.svg.png" height='15px' width='15px' alt="" /> post_controller.rb</p>
                  <hr />
                  <p className='notion-subtitle'>app/controllers/post_...</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png" height='24px' width='24px' alt="" /> webpacker.yml</p>
                  <hr />
                  <p className='notion-subtitle'>config/webpacker.yml</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691699282/Jeff%20Studio/gemfile_x3x08j.svg" height='24px' width='24px' alt="" /> Gemfile</p>
                  <hr />
                  <p className='notion-subtitle'>Gemfile</p>
                </button>
              </div>
            </div>
          )}
          {clickedCmd === 5 && (
            <div className='d-flex flex-column'>
              <div className='title'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691758202/Jeff%20Studio/sigmund-jzz_3jWMzHA-unsplash_iiawmw.jpg" style={{ borderRadius: '5px' }} width="20px" height='20px' alt="" />
                <h5 className='title-2'>MART JONES</h5>
              </div>
              <div className='tetx'>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62dd88e400a2a54b89e47d2f_imessage.webp" style={{ borderRadius: '5px' }} height='20px' width='20px' alt="" /> Maris ✨</p>
                  <hr />
                  <p className='notion-subtitle'>NO!! Real?</p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ddd0953b3a732bc525e707_twitter-favicon.svg" height='20px' width='20px' alt="" /> @mariisjones</p>
                  <hr />
                  <p className='notion-subtitle'>ChatGPT, save my life... </p>
                </button>
                <button href="" className='notion'>
                  <p className='notion-title'><img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691686263/Jeff%20Studio/insta_l6azwr.jpg" height='20px' width='20px' style={{ borderRadius: '5px' }} alt="" /> Maris Jones</p>
                  <hr />
                  <p className='notion-subtitle'>Noris liked your photo.</p>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='d-flex justify-content-center align-items-center m-4'>
          <div>
            <button href="#" className='cmd' onClick={() => handleCmdClick(1)}>
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691685219/Jeff%20Studio/Notion_iuyjyq.webp" className='app-icon' alt="" />
            </button>
          </div>
          <div>
            <button href="#" className='cmd' onClick={() => handleCmdClick(2)}>
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691685268/Jeff%20Studio/figma_zczlet.webp" className='app-icon' alt="" />
            </button>
          </div>
          <div>
            <button href="#" className='cmd' onClick={() => handleCmdClick(3)}>
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691693724/Jeff%20Studio/React-logo_radw77.svg" className='app-icon' style={{ backgroundColor: 'white' }} alt="" />
            </button>
          </div>
          <div>
            <button href="#" className='cmd' onClick={() => handleCmdClick(4)}>
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691698789/Jeff%20Studio/62c48bd4d884e8c372162224_v3jbhi.png" className='app-icon' style={{ backgroundColor: '#CC0100' }} alt="" />
            </button>
          </div>
          <div>
            <button href="#" className='cmd' onClick={() => handleCmdClick(5)}>
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1691758202/Jeff%20Studio/sigmund-jzz_3jWMzHA-unsplash_iiawmw.jpg" className='app-icon' style={{ backgroundColor: '#white', borderRadius: '50%', boxSshadow: "0 1px 2px rgba(0,0,0,.25)" }} alt="" />
            </button>
          </div>
        </div>
        <audio preload="auto" id="audioPlayer">
          <source src={soundFile} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default Network;
