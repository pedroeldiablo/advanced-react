import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Use describe to group together similar tests
//the first parameter is a string to help identify the component where the tests are carried out when you get the results i.e. could be Test the App Component
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  //Use 'it' to test a single attribute of a target. i.e. what exactly you are testing about 'App'
  it('shows a comment box', () => {
    //Use 'expect' to make an 'assertion' about a target.
    expect(component.find('.comment-box')).to.exist;
  });

});
