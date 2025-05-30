import { Box, Divider, Link, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>За нашите точиларски услуги</title>
      </Head>

      <Box
        padding={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: { xs: 8, sm: 14 },
        }}
      >
        <Typography variant="h3">За нас</Typography>
        <Typography variant="body2" mt={2} mb={6}>
          Историята ни започва през 1939 г., когато майстор Карник Матикян
          открива своята работилница в гр. Варна. През годините той изгражда
          репутацията си на майстор, а днес неговите внуци продължават семейната
          традиция.
          <br />
          <br />
          📍 В София ще ни откриете на ул. Цар Самуил 123, в близост до Лъвов
          мост и Женски пазар.
          <br />
          📍 Във Варна се намираме на ул. Рали Мавридов 35, район Колхозен
          пазар.
          <br />
          🚚 За останалата част от страната работим посредством куриерски фирми
          (Еконт / Спиди). При въпроси и заявки, свържете се с нас!
        </Typography>
        <Divider />
        <Typography variant="h3" mt={6}>
          Как заточваме вашите инструменти
        </Typography>
        <Box mb={4}>
          <Typography variant="body2" mt={2}>
            Основната ни машина е лентова шлайфмашина (belt grinder). Използваме
            VSM, cubitron, trizact и доста други ленти. Наред с това заточваме и
            с традиционни ръчни инструменти, като водни и маслени камъни и
            системи за заточване тип „jig“. Методът на заточване се избира
            спрямо нуждите и спецификите на инструмента.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default about;
