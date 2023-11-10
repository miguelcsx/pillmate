import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const API_KEY = process.env.NEWS_KEY; // Make sure your environment variable is properly set
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=health&' +
    `apiKey=${API_KEY}`;


const Headlines = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                // Get the first three articles from the API response
                const firstThreeNews = response.data.articles.slice(0, 5);
                // Filter out articles with the name "[Removed]"
                const filteredNews = firstThreeNews.filter(article => (article.title !== "[Removed]" && article.urlToImage !== null));
                setNews(filteredNews);
            } catch (error) {
                console.error('API Error:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    const openArticleUrl = (url) => {
        Linking.openURL(url); // Open the URL in the device's default browser
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleText}>
                <Ionicons name='ios-newspaper' size={20} color={"black"} />
                <Text style={styles.heading}>Top Health News</Text>
            </View>
            <ScrollView style={styles.newsContainer}>
                {news.map((article, index) => (
                    <TouchableOpacity key={index} onPress={() => openArticleUrl(article.url)} style={styles.articleContainer}>
                        <Image source={{ uri: article.urlToImage }} style={styles.articleImage} />
                        <View style={styles.articleTextContainer}>
                            <Text style={styles.articleTitle}>{article.title}</Text>
                            <Text style={styles.articleDescription}>{article.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        minHeight: 140
    },
    titleText: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center"
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 1,
        marginLeft: 4
    },
    newsContainer: {
        flex: 1,
        marginTop: 12
    },
    articleContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 6,
        marginBottom: 16,
        flexDirection: "row",
    },
    articleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    articleDescription: {
        fontSize: 10,
        marginTop: 8,
        color: "gray"
    },
    articleImage: {
        width: 50,
        height: 50,
        marginRight: 16,
        borderRadius: 4
    },
    articleTextContainer: {
        flex: 1,
        flexDirection: "column",
    }
});

export default Headlines;
