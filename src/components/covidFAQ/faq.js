import React from 'react';
import { Card } from 'reactstrap';
import { isMobile } from 'react-device-detect';

const FAQ = () => {

    function renderContent() {
        if (isMobile) {
            return <div className="center faqRow">
                    <Card className="col-md-8 faq">
                        <h1 className="faqText question">When should I RSVP by?</h1>
                        <h6 className="faqText answer">Please RSVP no later than
                        February 1, 2021</h6>
                    </Card>
                    <Card className="col-md-8 faq mobileFaq2">
                        <h1 className="faqText question">Is a mask required at your
                        wedding?</h1>
                        <h6 className="faqText answer">Yes, with the exception of
                        eating and drinking a mask will be required while
                        attending our celebratory events.</h6>
                    </Card>
                    <Card className="col-md-8 faq">
                        <h1 className="faqText question">Can I bring a date?</h1>
                        <h6 className="faqText answer">In order to keep our guest
                        list on track, we are only able to accommodate guests
                        who are formally invited.</h6>
                    </Card>
                    <Card className="col-md-8 faq">
                        <h1 className="faqText question">Are kids welcome?</h1>
                        <h6 className="faqText answer">This will be an adults-only
                        celebration (21+); make it a night out.</h6>
                    </Card>
                    <Card className="col-md-8 faq mobileFaq1">
                        <h1 className="faqText question">Can I take pictures of the
                        wedding?</h1>
                        <h6 className="faqText answer">We respectfully request that
                        no photography/video recordings be taken during our
                        ceremony. We invite you to be fully present at our
                        unplugged ceremony and enjoy this intimate moment
                        with us. During the reception, however, we welcome
                        and encourage all photos with the use of our wedding
                        hashtag. #JourneyToJohnson</h6>
                    </Card>
                    <Card className="col-md-8 faq">
                        <h1 className="faqText question">What time should I arrive at
                        the ceremony?</h1>
                        <h6 className="faqText answer">Please arrive by 3:30 pm. The
                        ceremony will begin promptly at 4:00 pm.</h6>
                    </Card>
                    <Card className="col-md-8 faq mobileFaq2">
                        <h1 className="faqText question">Is there parking for the
                        ceremony or reception?</h1>
                        <h6 className="faqText answer">Please see the{" "}
                            <i><a href="https://s3.amazonaws.com/journey2johnson2021.com/Parking_Map.pdf"
                                target="_blank" rel="noopener noreferrer" className="faqLink">parking map</a></i>{" "}
                        for detail instructions for parking at the reception.
                        Cocktail hour will start promptly at 5:30pm.</h6>
                    </Card>
                    <Card className="col-md-8 faq">
                        <h1 className="faqText question">Are you registered? If so,
                        where?</h1>
                        <h6 className="faqText answer">Please view the <i><a href="/registry" className="faqLink">
                            registry page</a></i> for more information.</h6>
                    </Card>
            </div>
        }
        else {
            return <div>
                <div className="row center faqRow">
                    <Card className="col-md-5 faq center">
                        <h1 className="faqText question">When should I RSVP by?</h1>
                        <h6 className="faqText answer">Please RSVP no later than
                        February 1, 2021</h6>
                    </Card>
                    <Card className="col-md-5 faq center mobileFaq2">
                        <h1 className="faqText question">Is a mask required at your
                        wedding?</h1>
                        <h6 className="faqText answer">Yes, with the exception of
                        eating and drinking a mask will be required while
                        attending our celebratory events.</h6>
                    </Card>
                </div>
                <div className="row center faqRow">
                    <Card className="col-md-5 faq center">
                        <h1 className="faqText question">Can I bring a date?</h1>
                        <h6 className="faqText answer">In order to keep our guest
                        list on track, we are only able to accommodate guests
                        who are formally invited.</h6>
                    </Card>
                    <Card className="col-md-5 faq center">
                        <h1 className="faqText question">Are kids welcome?</h1>
                        <h6 className="faqText answer">This will be an adults-only
                        celebration (21+); make it a night out.</h6>
                    </Card>
                </div>
                <div className="row center faqRow">
                    <Card className="col-md-5 faq center mobileFaq1">
                        <h1 className="faqText question">Can I take pictures of the
                        wedding?</h1>
                        <h6 className="faqText answer">We respectfully request that
                        no photography/video recordings be taken during our
                        ceremony. We invite you to be fully present at our
                        unplugged ceremony and enjoy this intimate moment
                        with us. During the reception, however, we welcome
                        and encourage all photos with the use of our wedding
                        hashtag. #JourneyToJohnson</h6>
                    </Card>
                    <Card className="col-md-5 faq center">
                        <h1 className="faqText question">What time should I arrive at
                        the ceremony?</h1>
                        <h6 className="faqText answer">Please arrive by 3:30 pm. The
                        ceremony will begin promptly at 4:00 pm.</h6>
                    </Card>
                </div>
                <div className="row center faqRow">
                    <Card className="col-md-5 faq center mobileFaq2">
                        <h1 className="faqText question">Is there parking for the
                        ceremony or reception?</h1>
                        <h6 className="faqText answer">Please see the{" "}
                            <i><a href="https://s3.amazonaws.com/journey2johnson2021.com/Parking_Map.pdf"
                                target="_blank" rel="noopener noreferrer" className="faqLink">parking map</a></i>{" "}
                        for detail instructions for parking at the reception.
                        Cocktail hour will start promptly at 5:30pm.</h6>
                    </Card>
                    <Card className="col-md-5 faq center">
                        <h1 className="faqText question">Are you registered? If so,
                        where?</h1>
                        <h6 className="faqText answer">Please view the <i><a href="/registry" className="faqLink">
                            registry page</a></i> for more information.</h6>
                    </Card>
                </div>
            </div>
        }
    }
    return (
        renderContent()
    )
}

export default FAQ;