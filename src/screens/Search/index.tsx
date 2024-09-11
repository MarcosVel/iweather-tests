import { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import bg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { styles } from "./styles";

import { useCity } from "@hooks/useCity";
import {
  CityProps,
  getCityByNameService,
} from "@services/getCityByNameService";

import { SelectList } from "@components/SelectList";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const dimensions = Dimensions.get("window");

export function Search() {
  const { top } = useSafeAreaInsets();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const { handleChanceCity } = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={bg}
        defaultSource={bg}
        style={[styles.container, { height: dimensions.height - top }]}
        resizeMode="cover"
      >
        <Logo width={186} height={32} />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -40 : -180}
        >
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>
                Boas vindas ao <Text style={styles.brand}>iWeather</Text>
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>
                Escolha um local para ver a previsão do tempo
              </Text>
            </View>

            <SelectList
              data={cities}
              onChange={setSearch}
              isLoading={isLoading}
              onPress={handleChanceCity}
              placeholder="Buscar local"
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
}
