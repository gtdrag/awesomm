/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const CalendarView = props => {
  const { onClosed } = props;
  LocaleConfig.locales.us = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    dayNamesShort: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
  };
  LocaleConfig.defaultLocale = 'us';

  const styles = StyleSheet.create({
    calendar: {
      width,
      height: height / 2,
      marginTop: height / 4,
      paddingHorizontal: 12,
      alignSelf: 'center',
    },
  });

  // eslint-disable-next-line no-undef
  renderArrow = direction => {
    return (
      <Image
        style={{ tintColor: '#7a4796' }}
        source={
          direction === 'left'
            ? require('../../assets/images/left-arrow.png')
            : require('../../assets/images/right-arrow.png')
        }
      />
    );
  };

  return (
    <View style={[props.style, { position: 'absolute', zIndex: 9 }]}>
      <Calendar
        hideExtraDays
        current={props.current}
        onDayPress={props.onDayPress}
        // eslint-disable-next-line react/no-this-in-sfc
        renderArrow={this.renderArrow}
        minDate={props.minDate}
        maxDate={props.maxDate}
        theme={{
          textSectionTitleColor: '#646973',
          textDayHeaderFontSize: 18,
          textMonthFontWeight: '700',
          dayTextColor: '#7a4796',
          todayTextColor: '#7a4796',
          selectedDayTextColor: 'white',
          textDayFontSize: 20,
          monthTextColor: '#000000',
          textDisabledColor: 'gray',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
            },
            arrowImage: {
              width: 50,
              height: 50,
              tintColor: '#7a4796',
            },
            arrow: {
              padding: 0,
            },
            dayHeader: {
              fontSize: 18,
            },
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
              backgroundColor: 'white',
            },
          },
          'stylesheet.day.basic': {
            selected: {
              borderRadius: 16,
              backgroundColor: '#bbb',
            },
            selectedText: {
              fontWeight: '700',
              color: '#ffffff',
              marginTop: 4,
            },
          },
          'stylesheet.calendar.main': {
            container: {
              padding: 12,
            },
          },
        }}
        style={styles.calendar}
      />
      <TouchableOpacity
        onPress={onClosed}
        style={{
          right: 20,
          top: 20,
          position: 'absolute',
        }}
      >
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
            }}
          >
            X
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarView;
