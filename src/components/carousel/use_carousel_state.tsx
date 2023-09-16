import { useCallback, useState } from 'react';

const useCarouselState = ({ count, initialStep = 0 }: { count: number; initialStep?: number }) => {
  const [state, setState] = useState({ step: initialStep, crossedBoundary: false });

  const goForward = useCallback(() => {
    const newStep = state.step + 1;
    if (newStep < count) {
      setState({ step: newStep, crossedBoundary: false });
      return;
    }
    setState({ step: 0, crossedBoundary: true });
  }, [state.step, count]);

  const goBack = useCallback(() => {
    const newStep = state.step - 1;
    if (newStep >= 0) {
      setState({ step: newStep, crossedBoundary: false });
      return;
    }
    setState({ step: count - 1, crossedBoundary: true });
  }, [count, state.step]);

  return { state, goBack, goForward };
};

export default useCarouselState;
