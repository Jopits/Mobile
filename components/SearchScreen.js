import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


const placeDescriptions = {
    Zapote: 'Zapote Bridge is a stone arch pedestrian bridge crossing the Zapote River in the Philippines. It connects the cities of Las Piñas in Metro Manila and Bacoor in the province of Cavite. The bridge and its surrounding area was the site of two battles, the Battle of Zapote Bridge (1897) between Filipino revolutionaries and the Spanish colonial government in 1897 during the Philippine Revolution, and the Battle of Zapote River between Filipino and American forces in 1899 during the Philippine–American War. Because of these historic events, the bridge was designated as a National Historical Landmark by the National Historical Commission of the Philippines on September 9, 2013.',
    Binakayan: 'The Battle of Binakayan–Dalahican (Tagalog: Labanan sa Binakayan–Dalahikan; Spanish: Batalla de Binakayan-Dalahican) was a simultaneous battle during the Philippine Revolution that was fought on November 9–11, 1896 that led to a decisive Filipino victory. The twin battle took place at the shores of Binakayan, in the town of Cavite Viejo (also called Cavite el Viejo, now Kawit); Dalahican and Dagatan in Noveleta; and, to minimal extent, in Imus and Bacoor towns in Cavite, Philippines that lasted for two days before the Spanish army retreated demoralized and in disarray.',
    'San Roque': 'The Diocesan Shrine of Our Lady of Solitude of Porta Vaga (Spanish: Santuario Diocesano de la Virgen de la Soledad de Porta Vaga), commonly known as the San Roque Parish Church, is a Latin Rite Roman Catholic church in Cavite City on Luzon island, the Philippines. It is under the jurisdiction of the Diocese of Imus. The church enshrines Our Lady of Solitude of Porta Vaga, an icon that appeared after an apparition of the Blessed Virgin Mary.',
    Hacienda: 'Originally built in the 17th century, Casa Hacienda de Tejeros was considered the Augustinian Recollects, largest and grandest estate in the Philippines. The hacienda covered 1,125 hectares of arable land, the casa occupying 4 hectares. Tejeros comes from the Spanish word tejer, which means "to weave", after the weaving industry brought about by Rosario major crops, abaca and cotton.',
  };
  

export default function SearchScreen({ route, navigation }) {
  const { searchTerm, results } = route.params;

  console.log('Search Term:', searchTerm);
  console.log('Results:', results);

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Results for "{searchTerm}"</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {results && results.length > 0 ? (
          results.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={styles.resultContainer}
              onPress={() =>
                navigation.navigate('Detail', {
                  title: location.name,
                  description: placeDescriptions[location.name] || 'No description available.',
                  imageSource: location.image,
                })
              }
            >
              <Image source={location.image} style={styles.image} resizeMode="contain" />
              <Text style={styles.locationName}>{location.name}</Text>
              <Text style={styles.locationDescription}>
                {placeDescriptions[location.name] || 'No description available.'}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResultsText}>No results found</Text>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9E9DB',
    justifyContent: 'space-between', // Ensures the back button is pushed to the bottom
  },
  searchText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 5,
    color: 'gray', 
  },
  noResultsText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
