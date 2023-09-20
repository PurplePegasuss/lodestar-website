import { useCallback, useState } from 'react';

type Direction = 'left' | 'right';

const useCarouselState = ({ count, initialStep = 0 }: { count: number; initialStep?: number }) => {
  const [state, setState] = useState<{ step: number; crossedBoundary: Direction | null }>({
    step: initialStep,
    crossedBoundary: null,
  });

  const goForward = useCallback(() => {
    const newStep = state.step + 1;
    if (newStep < count) {
      setState({ step: newStep, crossedBoundary: null });
      return;
    }
    setState({ step: 0, crossedBoundary: 'right' });
  }, [state.step, count]);

  const goBack = useCallback(() => {
    const newStep = state.step - 1;
    if (newStep >= 0) {
      setState({ step: newStep, crossedBoundary: null });
      return;
    }
    setState({ step: Math.max(count - 1, 0), crossedBoundary: 'left' });
  }, [count, state.step]);

  return { state, goBack, goForward };
};

export default useCarouselState;
