import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []); 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
      <TouchableOpacity
  onPress={() => {
    console.log("Opening Bottom Sheet");
    bottomSheetRef.current?.expand();
    console.log("After expand");  
  }}
>
  <Text>Open Bottom Sheet</Text>
</TouchableOpacity>

<BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          animateOnMount={true}
          enableDynamicSizing={false}
        >
  <View style={styles.contentContainer}>
    <Text>Bottom Sheet Content</Text>
  </View>
</BottomSheet>

      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
