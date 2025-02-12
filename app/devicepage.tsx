import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit' // You'll need to install this package
import { MessageSquareText, UserRoundPen, MapPinMinusInside, MapPinHouse, Airplay, Cast } from 'lucide-react-native';
import DeviceControlModal from './modals/devicemodal';
import NotificationModal from './modals/notoficationmodal';
import CSVExportModal from './modals/csvmodal';
const DevicePage = () => {
    const [devicemodal, setDeviceModal] = useState(false);
    const [notificationmodal, setNotificationModal] = useState(false);
    const [csvmodal, setCSVModal] = useState(false);
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header Buttons */}
                <View style={styles.headerButtons}>
                    <TouchableOpacity style={[styles.button, styles.activeButton]} onPress={() => setDeviceModal(true)}>
                        <Text style={styles.buttonText}>Device Control</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.activeButton]} onPress={() => setNotificationModal(true)}>
                        <Text style={styles.buttonText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.activeButton]} onPress={() => setCSVModal(true)}>
                        <Text style={styles.buttonText}>CSV Export</Text>
                    </TouchableOpacity>
                </View>

                {/* Status Cards */}
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Last Update</Text>
                        <MessageSquareText size={30} color={'#3699FF'} style={styles.chatIcon} />
                        <View style={styles.Text}>
                            <Text style={styles.timeText1}>25-01-29</Text>
                            <Text style={styles.timeText2}>07:46:27</Text>
                        </View>
                        <Text style={styles.subtitleText}>Last Message Recieved</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Last Press</Text>
                        <UserRoundPen size={30} color={'#3699FF'} style={styles.chatIcon} />
                        <View style={styles.Text}>
                            <Text style={styles.timeText1}>25-01-29</Text>
                            <Text style={styles.timeText2}>08:06:27</Text>
                        </View>
                        <Text style={styles.subtitleText}>Last Checking Time</Text>

                    </View>

                    <View style={styles.row}>
                        <View style={[styles.card, styles.halfCard]}>
                            <Text style={styles.cardLabel}>Last Gateway Connected</Text>
                            <View style={styles.gateaycard}>
                                <MapPinMinusInside size={24} color={'#FFAE00'} />
                                <View style={styles.commercial}>
                                    <Text style={styles.valueText}>Gateway</Text>
                                    <Text style={styles.subtitleText}>Commercial478SW</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.card, styles.halfCard]}>
                            <Text style={styles.cardLabel}>MHz</Text>
                            <View style={styles.gateaycard}>
                                <MapPinHouse size={24} color={'#FFAE00'} />
                                <View style={styles.commercial}>
                                    <Text style={styles.valueText}>Device TX Frequency</Text>
                                    <Text style={styles.subtitleText}>867.9 MHz</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, styles.halfCard]}>
                            <Text style={styles.cardLabel}>Last Gateway Connected</Text>
                            <View style={styles.gateaycard}>
                                <Airplay size={24} color={'#3699FF'} />
                                <View style={styles.commercial}>
                                    <Text style={styles.valueText}>Gateway</Text>
                                    <Text style={styles.subtitleText}>Commercial478SW</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.card, styles.halfCard]}>
                            <Text style={styles.cardLabel}>MHz</Text>
                            <View style={styles.gateaycard}>
                                <Cast size={24} color={'#3699FF'} />
                                <View style={styles.commercial}>
                                    <Text style={styles.valueText}>Device TX Frequency</Text>
                                    <Text style={styles.subtitleText}>867.9 MHz</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Sensor History Section */}
                <View style={styles.historySection}>
                    <Text style={styles.historyTitle}>Sensor History Graph</Text>
                    <Text style={styles.historyId}>24e124535512i793</Text>

                    <View style={styles.dateButtons}>
                        <TouchableOpacity style={styles.dateButton}>
                            <Text style={styles.dateButtonText}>From Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dateButton}>
                            <Text style={styles.dateButtonText}>To Date</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bar Chart */}
                    <BarChart
                        data={{
                            labels: ['01-23', '01-23', '01-23', '01-23', '01-23', '01-23', '01-23'],
                            datasets: [{
                                data: [15, 5, 15, 8, 25, 5, 15]
                            }]
                        }}
                        width={screenWidth - 32} // Use a fixed width or calculate dynamically
                        height={220}
                        yAxisLabel="" // Add this line
                        yAxisSuffix=""
                        chartConfig={{
                            backgroundColor: '#1E1E1E',
                            backgroundGradientFrom: '#1E1E1E',
                            backgroundGradientTo: '#1E1E1E',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            barPercentage: 0.5,
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        fromZero={true} // Optional: start y-axis from zero
                        showValuesOnTopOfBars={true} // Optional: show values on top of bars
                        showBarTops={true} // Optional: show bar tops
                    />

                    {/* Device Map Section */}
                    <View style={styles.mapSection}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Device map</Text>
                            <TouchableOpacity>
                                <Text style={styles.linkText}>Location →</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mapContainer}>
                            <Text style={styles.mapPlaceholder}>Map</Text>
                        </View>
                    </View>

                    {/* Latest Messages Section */}
                    <View style={styles.messagesSection}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Latest Messages</Text>
                            <TouchableOpacity>
                                <Text style={styles.linkText}>View More →</Text>
                            </TouchableOpacity>
                        </View>

                        {[1, 2, 3].map((num) => (
                            <View key={num} style={styles.messageCard}>
                                <View style={styles.messageHeader}>
                                    <Text style={styles.messageId}>Id: {num}</Text>
                                    <Text style={styles.messageId}>24e124535e176260</Text>
                                    <Text style={styles.messageDate}>29 Oct 2023 | 3:29.4 MB</Text>
                                </View>
                                <Text style={styles.messageContent}>
                                    {`{"_id": {"$id": "6798B779bbb473198d35b377"}, "adr": true, "data": "AYVd", "fcnt": 6153, "fport": 85, "devEUI": "24e124535e176260", "ob`}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <DeviceControlModal
                visible={devicemodal}
                onClose={() => setDeviceModal(false)}
            />
            <NotificationModal
                visible={notificationmodal}
                onClose={() => setNotificationModal(false)}
            />
            <CSVExportModal
                visible={csvmodal}
                onClose={() => setCSVModal(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 16,
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#333',
        minWidth: 100,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 12,
    },
    commercial: {
        paddingLeft: 20
    },
    card: {
        backgroundColor: '#262626',
        padding: 16,
        borderRadius: 8,
        flex: 1,
    },
    halfCard: {
        flex: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    gateaycard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTextContainer: {
        flex: 1,
    },
    cardLabel: {
        color: '#888',
        fontSize: 12,
        marginBottom: 4,
    },
    gatewayText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 2,
    },
    gatewaySubText: {
        color: '#AAAAAA',
        fontSize: 12,
    },
    chatIcon: {
        marginTop: 5
    },
    Text: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    activeButton: {
        backgroundColor: '#FFA500',
    },
    buttonText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    cardContainer: {
        gap: 16,
    },
    // card: {
    //     backgroundColor: '#333',
    //     padding: 16,
    //     borderRadius: 8,
    // },
    // row: {
    //     flexDirection: 'row',
    //     gap: 16,
    // },
    // halfCard: {
    //     flex: 1,
    // },
    // cardLabel: {
    //     color: '#888',
    //     fontSize: 12,
    // },
    timeText1: {
        color: '#FFAE00',
        fontSize: 28,
    },
    timeText2: {
        color: '#3699FF',
        fontSize: 18,
    },
    valueText: {
        color: 'white',
        fontSize: 16,
        // marginVertical: 4,
    },
    subtitleText: {
        color: '#888',
        fontSize: 12,
    },
    historySection: {
        marginTop: 20,
    },
    historyTitle: {
        color: 'white',
        fontSize: 16,
    },
    historyId: {
        color: '#888',
        fontSize: 12,
        marginTop: 4,
    },
    dateButtons: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
    },
    dateButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
    },
    dateButtonText: {
        color: 'white',
    },
    mapSection: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#007AFF',
        fontSize: 14,
    },
    mapContainer: {
        height: 150,
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapPlaceholder: {
        color: 'white',
        fontSize: 16,
    },
    messagesSection: {
        marginTop: 20,
    },
    messageCard: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    messageId: {
        color: 'white',
        fontSize: 12,
    },
    messageDate: {
        color: '#888',
        fontSize: 12,
    },
    messageContent: {
        color: '#888',
        fontSize: 12,
        fontFamily: 'monospace',
    },
})

export default DevicePage