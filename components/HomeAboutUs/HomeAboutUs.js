import {aboutUsText, aboutUsTeamText, aboutUsAlumniText} from '../../data/SiteData'
import styles from './HomeAboutUs.module.scss';

const HomeAboutUs = () => {

  return (
    <>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsMain}>
          <h1>About Us</h1>
          <p>
            {aboutUsText}
          </p>
        </div>
        <div className={styles.aboutUsTeam}>
          <p>
            {aboutUsTeamText}
          </p>
          <img src="/static/images/group-new-final.jpg" alt="SRA Team group photo" />
        </div>
        <div className={styles.aboutUsAlumni}>
          <p>
            {aboutUsAlumniText}
          </p>
          <img src="/static/images/group-old-final.jpg" alt="SRA Team group photo" />
        </div>
      </div>
      <div className={styles.ourProjects}>
        <h1>Our Projects</h1>
        <button>Flagship Projects &nbsp;<span>&#8594;</span></button>
        <button>Eklavya Projects &nbsp;<span>&#8594;</span></button>
      </div>
    </>
    
  )
}


export default HomeAboutUs;