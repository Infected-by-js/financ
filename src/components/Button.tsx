const Box = forwardRef<View, React.PropsWithChildren<BoxProps>>(
  ({ children, _text, safeAreaBottom, safeAreaTop, ...props }: React.PropsWithChildren<BoxProps>, ref) => {
    const [style, otherProps] = useStyledSystemPropsResolver(props);
    const { top, bottom } = useSafeAreaInsets();
    const safeAreaStyle = useMemo<StyleProp<ViewStyle>>(() => {
      const baseStyle: StyleProp<ViewStyle> = {};
      if (safeAreaBottom) {
        baseStyle.paddingBottom = bottom;
      }

      if (safeAreaTop) {
        baseStyle.paddingTop = top;
      }

      return baseStyle;
    }, [safeAreaBottom, safeAreaTop, top, bottom]);

    return (
      <View {...otherProps} style={[style, safeAreaStyle]} ref={ref}>
        {wrapStringChild(children, _text)}
      </View>
    );
  }
);
