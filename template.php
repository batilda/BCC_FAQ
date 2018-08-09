<div class="ask-a-question-popup">
    <div class="ask-a-question-popup-cover"></div>
    <div class="ask-a-question-popup-error"></div>
    <div class="ask-a-question-popup-header">
        <h2>What Is Your Question?</h2>
    </div>
    <div class="ask-a-question-popup-text">
        Please, enter your question and contact information so that we can
        send our answer to you by e-mail.
    </div>
    <div class="ask-a-question-popup-inputs">
        <div class="ask-a-question-popup-inputs-item">
            <div class="ask-a-question-popup-inputs-item-label">Your Name&nbsp;</div>
            <div class="ask-a-question-popup-inputs-item-input">
                <input type="text" id="ask-popup-name" value="">
            </div>
        </div>
        <div class="ask-a-question-popup-inputs-item">
            <div class="ask-a-question-popup-inputs-item-label">Your Email<span class="ask-a-question-popup-redtext">*</span></div>
            <div class="ask-a-question-popup-inputs-item-input">
                <input type="text" id="ask-popup-email" value="">
            </div>
        </div>
        <div class="ask-a-question-popup-inputs-item">
            <div class="ask-a-question-popup-inputs-item-label">Your Question<span class="ask-a-question-popup-redtext">*</span></div>
            <div class="ask-a-question-popup-inputs-item-input">
                <textarea id="ask-popup-question" rows="5"></textarea>
            </div>
        </div>
    </div>
    <div class="ask-a-question-popup-selects">
        <div class="ask-a-question-popup-selects-item">
            <div class="ask-a-question-popup-selects-item-label">Your Credit History:</div>
            <div class="ask-a-question-popup-selects-item-select">
                <select id="ask-popup-history">
                    <option value="" selected="selected">Choose your credit</option>
                    <option value="Excellent Credit">Excellent Credit</option>
                    <option value="Good Credit">Good Credit</option>
                    <option value="Fair Credit">Fair Credit</option>
                    <option value="Bad Credit">Bad Credit</option>
                    <option value="No Credit">No Credit</option>
                    <option value="Don't know">Don't know</option>
                </select>
            </div>
        </div>
        <div class="ask-a-question-popup-selects-item">
            <div class="ask-a-question-popup-selects-item-label">Do you have checking account?</div>
            <div class="ask-a-question-popup-selects-item-select">
                <select id="ask-popup-account">
                    <option value="" selected="selected">Choose an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        <div class="ask-a-question-popup-selects-item">
            <div class="ask-a-question-popup-selects-item-label">How long have you had a loan or credit card?</div>
            <div class="ask-a-question-popup-selects-item-select">
                <select id="ask-popup-howlong">
                    <option value="" selected="selected">Choose an option</option>
                    <option value="Never">Never</option>
                    <option value="Less than 3 years ago">Less than 3 years ago</option>
                    <option value="More than 3 years ago">More than 3 years ago</option>
                </select>
            </div>
        </div>
        <div class="ask-a-question-popup-selects-item">
            <div class="ask-a-question-popup-selects-item-label">Have you ever been declared bankrupt or defaulted on a loan?</div>
            <div class="ask-a-question-popup-selects-item-select">
                <select id="ask-popup-bankrupt">
                    <option value="" selected="selected">Choose an option</option>
                    <option value="Never">Never</option>
                    <option value="Once">Once</option>
                    <option value="More than once">More than once</option>
                </select>
            </div>
        </div>
        <div class="ask-a-question-popup-selects-item">
            <div class="ask-a-question-popup-selects-item-label">Have you been late on any credit card or loan in the last year?</div>
            <div class="ask-a-question-popup-selects-item-select">
                <select id="ask-popup-beenlate">
                    <option value="" selected="selected">Choose an option</option>
                    <option value="No">No</option>
                    <option value="Less than 60 days">Less than 60 days</option>
                    <option value="60-90 days">60-90 days</option>
                    <option value="More than 90 days">More than 90 days</option>
                </select>
            </div>
        </div>
    </div>
    <div class="ask-a-question-popup-addblock">
        <div class="ask-a-question-popup-addblock-legend"><span class="ask-a-question-popup-redtext">*</span> - marked fields are required to be filled</div>
        <div class="ask-a-question-popup-addblock-agree">
            <div class="ask-a-question-popup-addblock-agree-left">
                <div class="ask-a-question-popup-addblock-agree-cb">
                    <div class="ask-a-question-popup-addblock-agree-cb-ckd"></div>
                    <input type="hidden" id="ask-popup-agree" value="0">
                </div>
            </div>
            <div class="ask-a-question-popup-addblock-agree-right">
                By submitting your question, you agree to the following:<span class="ask-a-question-popup-redtext">*</span>
            </div>
        </div>
        <div class="ask-a-question-popup-addblock-text">Here at BestCreditOffers.com we will answer all questions
            to the best of our knowledge and understanding, but we are not legally accredited professionals.
            We assume no liability for actions resulting from our advice and cannot guarantee the accuracy of
            information in all cases. Please seek appropriate professional or legal advice when needed.</div>
    </div>
    <div class="ask-a-question-popup-bottom">
        <div class="ask-a-question-popup-bottom-button">
            <div id="askPopupRecaptcha" class="g-recaptcha" data-bind="ask-popup-submit"></div>
            <a id="ask-popup-submit">ASK OUR EXPERTS</a>
        </div>
    </div>
</div>