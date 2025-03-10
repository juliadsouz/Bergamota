

          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#f26655",
              padding: 10,
              borderRadius: 4,
            }}
          >
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2021/01/29/17/26/time-5961665_1280.png",
              }}
              style={{
                width: 300,
                height: 300,
              }}
            />

            <Text
              style={{
                color: "#006400",
                fontSize: 15,
                margin: 10,
                fontFamily: this.state.fontsLoaded ? "Oswald_300Light" : "System",
              }}
            >
              Como criar uma rotina?
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
