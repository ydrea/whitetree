const MOUSE_UP = "mouseup";
export function useOutsideClick(handleClose, ref) {
  const handleClick = useCallback(
    (event) => {
      if (ref?.current?.contains && !ref.current.contains(event.target)) {
        handleClose();
      }
    },
    [handleClose, ref]
  );

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick);

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick);
    };
  }, [handleClick]);
}

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";
export function useEscapeKey(handleClose) {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
