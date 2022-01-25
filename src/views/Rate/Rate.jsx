import React from 'react';
import style from './Rate';

export default function Rate() {
  return (
    <div>
      <form class="review-form">
        <div class="form-group">
          <label>Your rating</label>
          <div class="reviews-counter">
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Your message</label>
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Name*"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Email Id*"
              />
            </div>
          </div>
        </div>
        <button class="round-black-btn">Submit Review</button>
      </form>
    </div>
  );
}
