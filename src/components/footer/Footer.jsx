import { Facebook, GitHub, Instagram, Twitter,Room, Phone, MailOutline } from '@mui/icons-material'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLeft">
        <h1 className="fLogo">한국유통</h1>
        <div className="fDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum, quisquam ullam fuga aspernatur omnis numquam, consequatur earum quia dignissimos quasi hic non vitae veniam assumenda perspiciatis nulla voluptatum qui.
        </div>
        <div className="fSocialContainer">
          <div className="fSocialIcon" style={{backgroundColor : "#385999"}}>
            <Facebook/>
          </div>
          <div className="fSocialIcon" style={{backgroundColor : "#E4405F"}}>
            <Instagram/>
          </div>
          <div className="fSocialIcon" style={{backgroundColor : "#171717"}}>
            <GitHub/>
          </div>
          <div className="fSocialIcon" style={{backgroundColor : "#55acee"}}>
            <Twitter/>
          </div>
        </div>
      </div>
      <div className="fCenter">
        <h3 className="fTitle">Connect Link</h3>
        <ul className="fList">
          <li className="fListItem">HOME</li>
          <li className="fListItem">CART</li>
          <li className="fListItem">커피자판기</li>
          <li className="fListItem">커피</li>
          <li className="fListItem">부수기제</li>
          <li className="fListItem">WishList</li>
          <li className="fListItem">Help</li>
        </ul>
      </div>
      <div className="fRight">
        <h3 className="fTitle">Contact</h3>
        <div className="fContactItem">
          <Room className='fContactIcon'/>
          경기도 광명시 밤일안로 42번길 24
        </div>
        <div className="fContactItem">
          <Phone className='fContactIcon'/>
          010-2242-4447
        </div>
        <div className="fContactItem">
          <MailOutline className='fContactIcon'/>
          ojspp000@naver.com
        </div>
        
      </div>
    </div>
  )
}

export default Footer