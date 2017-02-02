'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class StyleGuide extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<DocumentTitle title="Style Guide">
        	<section className="style-guide">
        		
        
				<main className="container">
					
					<div className="jumbotron">
						<h1>Style Guide</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero eveniet, illo soluta, deserunt maiores ipsum. Quae nisi neque temporibus beatae nesciunt mollitia expedita assumenda. Nobis vitae rem, excepturi explicabo.</p>
					</div>

				</main>
				<main className="style-guide">

					<div>
						<div className="style-heading">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Colors</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">

										<div className="row">
											<div className="col-xs-2 style-color"><span className="bg-color-primary">#00A5BC</span></div>
											<div className="col-xs-2 style-color"><span className="bg-color-primary-variant">#205B67</span></div>

											<div className="col-xs-2 style-color"><span className="bg-color-secondary">#95BF15</span></div>
											<div className="col-xs-2 style-color"><span className="bg-color-secondary-variant">#7AA006</span></div>

											<div className="col-xs-2 style-color"><span className="bg-color-tertiary">#F8533B</span></div>
											<div className="col-xs-2 style-color"><span className="bg-color-tertiary-variant">#A92310</span></div>
										</div>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>$brand-primary: </var>#00A5BC;<br/>
											<var>$brand-primary-variant: </var>#205B67;<br/>

											<var>$brand-secondary: </var>#95BF15;<br/>
											<var>$brand-secondary-variant: </var>#7AA006;<br/>

											<var>$brand-tertiary: </var>#F8533B;<br/>
											<var>$brand-tertiary-variant: </var>#A92310;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
					</div>







					<div>
						<div className="style-heading">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Typography</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<h1>Playfair</h1>
										<p className="font-serif">
											a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
											A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
											1 2 3 4 5 6 7 8 9 0
										</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>$font-family-serif: </var>'Playfair Display', serif;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style single">
							<div className="container">
								<div className="row">

									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Regular</label>
										<p className="font-serif">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</p>
									</div>
									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Bold</label>
										<p className="font-serif">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</p>
									</div>
									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Italic</label>
										<p className="font-serif"><em>The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</em></p>
									</div>
									
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<h1 className="font-base">Roboto</h1>
										<p>
											a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
											A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
											1 2 3 4 5 6 7 8 9 0
										</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>$font-family-base: </var>'Roboto', sans-serif;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style single">
							<div className="container">
								<div className="row">

									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Regular</label>
										<p>The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</p>
									</div>
									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Bold</label>
										<p><strong>The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</strong></p>
									</div>
									<div className="col-xs-12 col-md-4 style-sample">
										<label className="style-label">Italic</label>
										<p><em>The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet deserunt dolores magni quae sint ipsa, impedit quisquam alias tenetur nihil voluptatibus excepturi minima exercitationem eius non quo numquam quis?</em></p>
									</div>
									
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Paragraph</label>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus facere pariatur atque.</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>font-size: </var>14px;<br/>
											<var>line-height: </var>1.4;<br/>
											<var>margin-bottom: </var>10px;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Introduction Paragraph</label>
										<p className="introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus facere pariatur atque.</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>font-size: </var>18px;<br/>
											<var>line-height: </var>1.4;<br/>
											<var>margin-bottom: </var>20px;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Hypertext</label>
										<p><a href="">Lorem ipsum dolor sit amet</a>, consectetur adipisicing elit. <a href="">Eligendi</a> vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus <a href="">facere</a> pariatur atque.</p>
										
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>color: </var>#337ab7;<br/>
											<var>text-decoration: </var>underline;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Superscript</label>
										<p>Lorem ipsum dolor sit amet<sup>1,2,3</sup>, consectetur adipisicing elit<sup>1,2,3</sup>. Eligendi vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus facere<sup>1,2,3</sup> pariatur atque.</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>font-size: </var>75%;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Subscript</label>
										<p>Lorem ipsum dolor sit amet<sub>1,2,3</sub>, consectetur adipisicing elit<sub>1,2,3</sub>. Eligendi vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus<sub>1,2,3</sub> facere pariatur atque.</p>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>font-size: </var>75%;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Small</label>
										<small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero sapiente consectetur distinctio expedita commodi placeat pariatur, nisi. Obcaecati unde, excepturi id! Autem eum nobis animi voluptatibus facere pariatur atque.</small>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>font-size: </var>85%;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Unordered list</label>
										<ul>
											<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> 
											<li>Eligendi vero sapiente consectetur distinctio.</li>
											<li>Expedita commodi placeat pariatur.
												<ul>
													<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> 
													<li>Eligendi vero sapiente consectetur distinctio.</li>
													<li>Expedita commodi placeat pariatur.</li>
												</ul>
											</li>
										</ul>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>margin-bottom:</var> 20px;<br/>
											<var>margin-top:</var> 0;
										</samp>
										
									</div>
								</div>
							</div>
						</div>

						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Ordered list</label>
										<ol>
											<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> 
											<li>Eligendi vero sapiente consectetur distinctio.</li>
											<li>Expedita commodi placeat pariatur.
												<ol>
													<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> 
													<li>Eligendi vero sapiente consectetur distinctio.</li>
													<li>Expedita commodi placeat pariatur.</li>
												</ol>
											</li>
										</ol>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>margin-bottom:</var> 20px;<br/>
											<var>margin-top:</var> 0;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
					</div>

					







					<div>
						<div className="style-heading">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Headings</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">h1</label>
										<h1>The quick brown fox jumps over the lazy dog</h1>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp className="visible-xs">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 30px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-sm">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 40px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-md visible-lg">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 50px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">h2</label>
										<h2>The quick brown fox jumps over the lazy dog</h2>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp className="visible-xs">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 20px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-sm">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 30px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-md visible-lg">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 40px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">h3</label>
										<h3>The quick brown fox jumps over the lazy dog</h3>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp className="visible-xs">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 18px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-sm">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 20px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-md visible-lg">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 30px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">h4</label>
										<h4>The quick brown fox jumps over the lazy dog</h4>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp className="visible-xs">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 16px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-sm">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 18px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										<samp className="visible-md visible-lg">
											<var>font-family:</var> 'Playfair Display', serif;<br/>
											<var>font-size:</var> 20px;<br/>
											<var>line-height:</var> 1.2;<br/>
										</samp>
										
									</div>
								</div>
							</div>
						</div>
					</div>








					<div>
						<div className="style-heading">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Buttons</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Button style 1</label>
										<button className="btn btn-default">Submit</button>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>color:</var> #333;<br/>
											<var>background-color:</var> #fff;<br/>
											<var>border:</var> solid 1px #ccc;<br/>
											<var>border-radius:</var> 4px;<br/>
											<var>padding:</var> 6px 12px;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Button style 2</label>
										<button className="btn btn-primary">Submit</button>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">

										<samp>
											<var>color:</var> #fff;<br/>
											<var>background-color:</var> #337ab7;<br/>
											<var>border:</var> solid 1px #2e6da4;<br/>
											<var>border-radius:</var> 4px;<br/>
											<var>padding:</var> 6px 12px;
										</samp>
										
									</div>
								</div>
							</div>
						</div>
					</div>







					<div>
						<div className="style-heading">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Form Elements</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Checkbox list</label>
										<ul className="list-checkboxes">
											<li className="checkbox"><label htmlFor="chk1">Checkbox 1</label> <input id="chk1" name="chk1" type="checkbox"/><span></span></li>
											<li className="checkbox"><label htmlFor="chk2">Checkbox 2</label> <input id="chk2" name="chk2" type="checkbox"/><span></span></li>
											<li className="checkbox"><label htmlFor="chk3">Checkbox 3</label> <input id="chk3" name="chk3" type="checkbox"/><span></span></li>
										</ul>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Radio list</label>
										
										<ul className="list-radios">
											<li className="radio"><label htmlFor="radio01">Radio Button 1</label><input id="radio01" name="radio" type="radio"/><span></span></li>
											<li className="radio"><label htmlFor="radio02">Radio Button 2</label><input id="radio02" name="radio" type="radio"/><span></span></li>
											<li className="radio"><label htmlFor="radio03">Radio Button 3</label><input id="radio03" name="radio" type="radio"/><span></span></li>
										</ul>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Textbox</label>
										
										<input type="text" placeholder="Textbox"/>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Password</label>
										
										<input type="password" placeholder="Password"/>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">
										
									</div>
								</div>
							</div>
						</div>
						<div className="style">
							<div className="container">
								<div className="row vertical-center">
									<div className="col-xs-12 col-md-6 style-sample">
										
										<label className="style-label">Dropdown list</label>
										
										<select>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
										</select>
										
									</div>
									<div className="col-xs-12 col-md-6 style-vars">
										
									</div>
								</div>
							</div>
						</div>
					</div>


					



					<br/>
					<br/>
					<br/>
					<br/>
					<br/>





				</main>


      
        	</section>
		</DocumentTitle>
    );
  }

}

StyleGuide.propTypes = propTypes;

export default StyleGuide;
