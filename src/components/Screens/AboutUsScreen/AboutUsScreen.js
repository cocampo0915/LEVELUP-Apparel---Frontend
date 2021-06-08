import React, { useEffect, useState } from 'react';
import './AboutUsScreen.css';

function AboutUsScreen(props) {

  return (
      <>
    <div className="aboutus-header">
        <img src="https://pbs.twimg.com/media/DWDO09_W4AAnL_2.jpg" alt="" />
    </div>
    <div className="aboutus-content">
        <article className="article-card">
        <h2>We're LEVELUP</h2>
        <p>
        Or, as some might know us as, Tina and Olivia: two best friends, fashion experts, and esports diehards. 
        </p>
        <p>
        Years ago, we saw an open lane between gaming and apparel. Players fidgeting, champions overheating, streamers scrambling to find the right look. So, like any team player, we set out to fill the lane.
        </p>
        <p>
        In 2016 we fell in love with gaming...so we quit our jobs, moved across the country and never looked back.   
        </p>
        <p>We got to work attending every gaming event we could, staying up late watching Twitch, and making sweatshirt samples on our home sewing machine.</p>
        <p>Finally, we developed a sweatshirt fit for a (esports) pro. Since then, we've done a lot more than make great apparel...</p>    
        </article>    
        
        <article className="article-card">
        <h2>OUR MISSION</h2>
        <p>We didn't just set out to make the best apparel for gamers... we set out to revolutionize the world through gaming.</p>
        <p>We're focused on creating community, opportunity and an equal map for all.

</p>
        <p>In everything we do, we think bigger and do better to impact the future for the next generation of gamers—one sweatshirt at a time.</p>
        <p>From community events, to collaborations, to products, we choose quality over quantity and make sure we're elevating gaming as we do it.</p>
        </article>    
    </div>   
    </>
)

}

export default AboutUsScreen;