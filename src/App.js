import {Box, Container, Button, Counter} from './styles'
import { increaseValue, decreaseValue} from "./redux/action-creator";
import { useSelector, useDispatch} from "react-redux";

function App() {
    const data = useSelector(data => data.ourState.count)
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch(increaseValue())
    }
    const decreaseCount = () => {
        dispatch(decreaseValue())
    }
  return (
    <Container background='#144761' height='100vh'>
      <Box>
          <Button
          onClick={() => increaseCount()}
          >
              + 1
          </Button>
          <Counter>{data}</Counter>
          <Button
              onClick={() => decreaseCount()}
          >
              - 1
          </Button>
      </Box>
    </Container>
  );
}

export default App;
