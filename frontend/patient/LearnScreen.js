import React from 'react'
import {StyleSheet, Text, View, ScrollView, FlatList, Image, TextInput} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import SearchBar from './SearchBar'

const styles = StyleSheet.create({
  image: {width: 100, height: 100, borderColor: 'pink', borderWidth: 1, borderRadius: 8},
  mainText: {
    fontWeight: '500',
    paddingTop: 20,
  },
  secondaryText: {
    fontWeight: '300',
    color: '#5a5b5c'
  },
  textFlex: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  textCenter: {
    paddingTop: 5,
    textAlign: 'center'
  }
});

const LearnScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    <ScrollView style={styles.flexColumn}>
      <View>
        <View style={styles.textFlex}>
          <Text style={styles.mainText}>Support Groups</Text>
          <Text style={styles.secondaryText}>View All</Text>
        </View>

        <View style={styles.textFlex}>
          <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
          <View>
            <Image source={require('../images/teens.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Teens</Text>
          </View>

          <View>
            <Image source={require('../images/women.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Women</Text>
          </View>

          <View>
            <Image source={require('../images/men.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Men</Text>
          </View>
          <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
        </View>
      </View>

      <View>
        <View style={styles.textFlex}>
          <Text style={styles.mainText}>Webinars</Text>
          <Text style={styles.secondaryText}>View All</Text>
        </View>

        <View style={styles.textFlex}>
          <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
          <View>
            <Image source={require('../images/whatnow.jpeg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>What now?</Text>
          </View>
          <View>
            <Image source={require('../images/ibd.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>IBD</Text>
          </View>
          <View>
            <Image source={require('../images/chrons.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Crohns</Text>
          </View>
          <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
        </View>
      </View>

      <View>
        <View style={styles.textFlex}>
          <Text style={styles.mainText}>Articles</Text>
          <Text style={styles.secondaryText}>View All</Text>
        </View>

        <View style={styles.textFlex}>
          <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
          <View>
            <Image source={require('../images/uhoh.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Uh oh!</Text>
          </View>
          <View>
            <Image source={require('../images/teenissues.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Teen Issues</Text>
          </View>
          <View>
            <Image source={require('../images/fertility.jpeg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Fertility</Text>
          </View>
          <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
        </View>
      </View>

      <View>
        <View style={styles.textFlex}>
          <Text style={styles.mainText}>Videos</Text>
          <Text style={styles.secondaryText}>View All</Text>
        </View>

        <View style={styles.textFlex}>
          <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
          <View>
            <Image source={require('../images/ulcerativecolitis.webp')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Nutrition</Text>
          </View>
          <View>
            <Image source={require('../images/crohnsupport.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Staying Healthy</Text>
          </View>
          <View>
            <Image source={require('../images/ibdtreatment.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Sleep Quality</Text>
          </View>
          <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
        </View>
      </View>

      <View>
        <View style={styles.textFlex}>
          <Text style={styles.mainText}>Spotlight</Text>
          <Text style={styles.secondaryText}>View All</Text>
        </View>

        <View style={styles.textFlex}>
          <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
          <View>
            <Image source={require('../images/womenwebinar.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Best Advocates</Text>
          </View>
          <View>
            <Image source={require('../images/women.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Live Laugh Love</Text>
          </View>
          <View>
            <Image source={require('../images/teens.jpg')}
                   style={styles.image}
            />
            <Text style={styles.textCenter}>Medications</Text>
          </View>
          <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
        </View>
      </View>

    </ScrollView>
  </View>
}

export default LearnScreen