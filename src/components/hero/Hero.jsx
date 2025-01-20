import React from 'react'
import "./hero.css"
import Speech from './Speech'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There , <br />
          <span>I'm youssef!</span>
        </h1>
        <div className='awards'>
          <h2>Fullstack Developer</h2>
          <p>I'am a Fullstack developer with experience building Web , Mobile and Desktop applications.</p>
           <div className="awardList">
            <img width={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX33x4AAAD95R91cw+RhRL64R7/7CD84x//6B9dVwz/6iD85x/45R+upBb14h//7SBJRQl2cA/w3h5BPgjGuhkXFgOxpheBehCUjBPj0x2PhxKjmRVbVgu+shgyLwYpKAXTxRvbzBwfHQRiXQ0jIQVUTgs2NQehnBVRUQsqJAUuKQY2MAZEQAnYxxurnBWPgxIREQNvZQ6AeBBvag5iYg0SEgO3rhcaGgQNCQHNq1PaAAAHNUlEQVR4nO2cb3+iOBCAJbchWf5VkSpoaaG12rtdt9t1a/v9P9mJvbYKE0gQTPZ387zomyryQAiZySSDAYIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCCKGMuJyh7uuyzl3CaO6TwjAtQGIzDcpu3DzbTx6GF//vfjn2/eHUTxZBxfEMEsSX32tcP+jWZHZyereqjKOM8coSfIXcJbWY5MhD/3v0Bf3LOKEm+MIG36pNyTh7KfQb88m52cSaKSFIXPn9Xp7pqHUw9w/6oY8H0sIWtZL5JxPowZlQ3sl5Vcws88oIkTV0B5JC1rWlWdAh6No6NwpCFrWMNCvqGbo/lYSNEJRyZBPFQUt66t7ZqEKKoZkoiy4e2vo7lEVDGnSQtCyJprfiwqG/KqVoZXofRTlDVnaTtAa6m2n8obudUtDy9faTqUNadtbuCPRIPaBtKE9bC041eD1iaxhXUd6/TSd/nq6Ef030xtIyRoSYcQUJzYnhDh24kNPauwyHV4HZy5p6EAZix0b7yNlQZm9Lf97mGiPhGUNPVhw5hy97Eh4HDv6jvZhqawhzUDBu/KrjnoHHdKdEWG+pCGDh6TV4QoN3x/Gy60BN3AgbUhi6GO/gYeM5m//GxlxAwfyhuDHJlA3yYte9zYyJp8oacifoI9loIW7tKae5lfEAbKGYPYiBw1plumOCQ/pwXBATWmge04yjIxSESBruIE+FhvSXdYi25eCOaixSc+bCFlDeOAd/QE3UXZMA8e/i9D8J1F2XJqDhiZkfJs4MbawxonpDfXU+LCIkMwZv0BIx/jg0PutpWZmBBECpPM0a6GhZV2Z7CifaxNlmvbcp3IVKhqQNmQNk/c3fmBMwHSEfM47rDfc8ZhwAzsdeUM+a1S07iLXuMaqMPcUXjYrWuNJYJijgqHkBOnL3CxHlTlg6TKFmUmOKoY0XEgqWrE5jkqVCqLxN8QPU5JRatUmJJJXXEbapyz2KFYMcZV50o0RSWHVqi+ucBet19SANIdy5R7JbxUcp672kZx69SUNVGrbvoe6O5w2NcKOr6B4mf8hc8DHX0pUiodyvf1NK8MBddPacLGkqPUutjPcfS+Yv8oa/tRa99XWsJizF6duSoy9/kXE59nacPduDGSK9gt0lmCeYrj7tjuRK9yP9D2KpxkWjhk4PVziWl+p8KmGgwHjyWNz9O9ru4mnG+7eHTz0lw2GC203sQvDQbFSKBKm/d9Idd3EjgyL1XpZ7Xj1StcCms4Md43Vzus6nbDzc5ejQ8PigczEL4+tpmbaqWHxPAoHOiNNSY2ODWuSAEtNvWnnhgMCF2pqexC7NxyQSqXwG4IKqr7pwXDgPICGmiqo+jCk8KOoaeCmbMiC5oPChRvzfrMZohZCwII1oSF1optRY7DngKtPeq2CY95a0ETgokPRyfCk+HhjsMfBpaanNf2GX9wNNQSJBA5e7jnoQIK3aeCXpoZ6bkMWFOuvH+EhhQeGdlCnQO3J83///towiobLi/pqpfQ9fwu/juDlTNWOndqHQ85Z/aPoggdd9dOXOuv3HTqG0KhJsI5iXTYk4XGP9KNOkcFvi16G3iQ8qHyNgXYKdzTlARbzKkk1v2YczeFguHLZToe6k5fDn8gqF1Gw5u716DmjTgosSouFd5ELpjW6zwvzvHQtn5OyogO+DY/jcS6YpHgK4FYnCi5uuo4tiPdY+ZHLUjGoI9jFIz44dybcZeAytauOux5X8PFNt/EhtbfP0M9MLj6aCmW2KFo9XAsjeFL3DKPjDZN2h8yFH+92WErLDfSDcRrul3xyO5wIF2cfjg5obT3bYpYFNmeMUlYcclsz69ZteEiqLfST4a8vs8enmgTn01EnwhsmYF7Hv+KV769mm9rl7Pfd5trqL3wTpdRm+4X4RwftuCdtuvB1LErDTsH6UTVuO8/SBApztCUqI4NTLtc73Ye/gpGTDNUuoa4/laOPuSdHfbecN6DBndc08dJEL/OHLc/qBgr+aKhSJlSlnznglhvmwFebJjIFwiKGPc3jszZ9oOhq06R913Xb2/ovLkjN1iDeLYeF4q0gG+ix2ESpVrLguiYDQz2Vzeg+ea1ENJ0qqjXUZX1zctrs9TXuuXSPJXLVIHuumhYTklB5M6z+yy8pECYKiJtPhvKJUodzc5b9L+vmZQ9Yym0FxIL5S/PB3q/ZmSr2qbttjA5e5tJbAZEA3Euows9ZeL5ZX+altbUg33yli83crLFbHfpn9NuflJ3MBaO429naUW1MlHvRVLy85H6VACmcvqHsIkxnd0cdxe3DdJJctNtmnJKLMIo3y+Mq0+fxaJV5tradyylx3TBZR+l2m0brJHRP3EWdEu4GSZ6l24nvb9MsDz2X69+XnRaw4k+Xx2Osw0MiCIIgCIIgCIIg/y/+BbPgaVSoamDeAAAAAElFTkSuQmCC" alt="" />
            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" />
           </div>
        </div>
        <a href='#services' className='scroll'>
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        <div className='follow'>
         <a href="">
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
         </a>
         <a href="https://www.linkedin.com/in/youssef-ben-said-13051122b/?originalSubdomain=tn">
          <img  width={50} src="data:image/png;base64,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" alt="" />
         </a>
         <div className="followTextContainer">
          <div className="followText">
            FOLLOW ME
          </div>
         </div>
        </div>
        <Speech />
        <div className="certeficate">
          <img src='data:image/jpeg;base64,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' alt=''/>
      <p>Bachelor's degree
        <br />
       in Information Systems Development.</p> 
        </div>
        <a href='/#contact' className='contactLink'>
        <div className="contactButton">
        <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
          <div className="arrow">
            <svg
            xmlns="http://www.w3/org/2000/svg"
            viewBox='0 0 24 24'
            width="50"
            height="50"
            fill='none'
            stroke='black'
            strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6"/>
              <polyline points='9 6 18 6 18 15'/>
            </svg>
          </div>
        </div>
        </a>
      </div>
      <div className="bg"></div>
    </div>
  )
}

export default Hero