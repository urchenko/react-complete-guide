import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DOMOOUTPPUT RUNNING!');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default DemoOutput;
